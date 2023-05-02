//1. DADOS E VARIÁVEIS DO MODELO
    //total de variáveis coletadas do modelo
    let n_var_col = 0
    n_var_col = table.length - ch - 1
    console.log(n_var_col) 
    //total de variáveis utilizadas no modelo
    let n_var_use = 0
    n_var_use = data.length - 1
    console.log(n_var_use) 
    //total de dados coletados do modelo
    let n_dat_col = 0
    n_dat_col = table[0].length - lh
    console.log(n_dat_col) 
    //total de dados utilizados no modelo
    let n_dat_use = 0
    n_dat_use = data[0].length
    console.log(n_dat_use) 

    let reg_dof = 0
    reg_dof = data.length - 1
    console.log(reg_dof) 

    let res_dof = 0
    res_dof = data[0].length - data.length
    console.log(res_dof)

    let total_dof = 0
    total_dof = data[0].length - 1
    console.log(total_dof)



//2. ESTATÍSTICA DO MODELO
    let data_Y = []
    data_Y = data[0]
    console.log(data_Y)

    let reg_pred_coef_var = []
    reg_pred_coef_var = regression(data)

    let reg_P = []
    reg_P = reg_pred_coef_var[0]
    console.log(reg_P)

    let reg_C = []
    reg_C = reg_pred_coef_var[1]
    console.log(reg_C)

    let reg_V = []
    reg_V = reg_pred_coef_var[2]
    console.log(reg_V)

    let mean_Y = 0
    mean_Y = jStat.mean(data[0])
    console.log(mean_Y.toFixed(2))

    let total_sum_sq = 0
    total_sum_sq = sumSquaresArrayNumber(data_Y, mean_Y)
    console.log(total_sum_sq.toFixed(2))

    let res_sum_sq =  0
    res_sum_sq = sumSquaresArrayArray(data_Y, reg_P)
    console.log(res_sum_sq.toFixed(2))

    let reg_sum_sq =  0
    reg_sum_sq = sumSquaresArrayNumber(reg_P, mean_Y)
    console.log(reg_sum_sq.toFixed(2))

    //coeficiente de correlação R
    let coef_R = 0
    coef_R = Math.sqrt(reg_sum_sq) / Math.sqrt(total_sum_sq)
    console.log(coef_R.toFixed(2))

    //console.log(jStat.combination(4,2))

    //coeficiente de determinação R2
    let coef_R2 = 0
    coef_R2 = reg_sum_sq / total_sum_sq
    console.log(coef_R2.toFixed(2))

    //coeficiente de determinação R2 ajustado
    let coef_R2aj = 0
    coef_R2aj = 1 - (n_dat_use - 1) * (1 - coef_R2) / res_dof
    console.log(coef_R2aj.toFixed(2))

    //desvio padrão / erro padrão
    //let stan_dev = 0
    let stan_err_mod = 0
    stan_err_mod = Math.sqrt(res_sum_sq / res_dof)
    console.log(stan_err_mod.toFixed(2))

    let reg_mean_sq = 0
    reg_mean_sq = reg_sum_sq / reg_dof
    console.log(reg_mean_sq.toFixed(2))

    let res_mean_sq = 0
    res_mean_sq = res_sum_sq / res_dof
    console.log(res_mean_sq.toFixed(2))

    //Fisher - Snedecor calculado
    let calc_F = 0
    calc_F = reg_mean_sq / res_mean_sq
    console.log(calc_F.toFixed(2))

    //significância do modelo
    //let mod_sig = 0
    let p_value_mod = 0
    p_value_mod = jStat.ftest(calc_F, reg_dof, res_dof)
    console.log(p_value_mod.toExponential(2))
    //Fisher - Snedecor tabelado
    let level_sign = 0 //probabilidade
    switch (true) {
      case (p_value_mod <= 0.01):
        level_sign = 0.01;
        break;
      case (p_value_mod > 0.01 && p_value_mod <= 0.02):
        level_sign = 0.02;
        break;
      case (p_value_mod > 0.02 && p_value_mod <= 0.05):
        level_sign = 0.05;
        break;
      default:
        level_sign = "Não significativo";
    }
    console.log(level_sign)
    let prob = 1 - level_sign
    let tab_F = 0
    tab_F = jStat.centralF.inv(prob, reg_dof, res_dof)
    console.log(tab_F.toFixed(2))

//3. NORMALIDADE DOS RESÍDUOS
    let reg_residuals = []
    reg_residuals = subtractionArrays(data_Y, reg_P)
    console.log(reg_residuals)

    let rel_residuals = []
    rel_residuals = relativeArrays(reg_residuals, data_Y)
    console.log(rel_residuals)

    let dev_residuals = []
    dev_residuals = relativeArrayNumber(reg_residuals, stan_err_mod)
    console.log(dev_residuals)

    //quantidade e porcentagem dos resíduos situados entre -1s e +1s
    let n_nor_res_68p = 0
    //quantidade e porcentagem dos resíduos situados entre -1,64s e +1,64s
    let n_nor_res_90p = 0
    //quantidade e porcentagem dos resíduos situados entre -1,96s e +1,96s
    let n_nor_res_95p = 0

    let n_out_liers = 0

    dev_residuals.forEach(value => {
        if (value >= 1 || value <= -1) {
            n_nor_res_68p++
          }
        if (value >= 1.64 || value <= -1.64) {
            n_nor_res_90p++
        }
        if (value >= 1.96 || value <= -1.96) {
            n_nor_res_95p++
        }
        if (value >= 2 || value <= -2) {
            n_out_liers++
        }
    })

    let n_nor_residuals = [n_nor_res_68p, n_nor_res_90p, n_nor_res_95p]

    let nor_residuals = relativeArrayNumber(n_nor_residuals, n_dat_use)

    let per_nor_residuals = subtractionNumberArray(1, nor_residuals)

    console.log(n_nor_residuals)
    console.log(per_nor_residuals)
    console.log(n_out_liers)


//4. OUTLIERS DO MODELO DE REGRESSÃO
    //quantidade e porcentagem dos resíduos situados entre -2s e +2s
    //let n_out_liers = 0

//5. ANÁLISE DA VARIÂNCIA (ANOVA)
    //soma dos quadrados - explicada (regressão)
    //let reg_sum_sq = 0
    //soma dos quadrados - não explicada (resíduos)
    //let res_sum_sq = 0
    //soma dos quadrados - total
    //let total_sum_sq = 0
    //graus de liberdade - explicada (regressão)
    //let reg_dof = 0
    //graus de liberdade - não explicada (resíduos)
    //let res_dof = 0
    //graus de liberdade - total
    //let total_dof = 0
    //quadrado médio - explicada (regressão)
    //let reg_mean_sq
    //quadrado médio - não explicada (resíduos)
    //let res_mean_sq
    //F
    //let calc_F = 0
    
//6. EQUAÇÃO DA REGRESSÃO
    //coeficientes da equação mtx, vct e ary
    //let b_reg_coef
    //equação da regressão
    let eq_reg = "Valor unitário = "
    for (let index = 0; index < reg_C.length; index++) {
      if (index == 0) {
        eq_reg = eq_reg + "(" + reg_C[index] + ")"
      }
      if (index > 0) {
          eq_reg = eq_reg + " + " + "(" + reg_C[index] + ")" + "*" + table[index + 2][0]
        }
    }
    
    console.log(eq_reg)
    
    
    //7. TESTES DE HIPÓTESE
    
    //erro padrão de cada vaiavel
    let stan_err_var = []
    stan_err_var = reg_V.map(value => Math.sqrt(res_sum_sq * value / res_dof))
    console.log(stan_err_var)

    //t Student calculado
    let calc_t = []
    calc_t = relativeArrays(reg_C, stan_err_var)
    console.log(calc_t)
    
    //p valor
    let test_t = []
    let dof_f = 0
    dof_f = data[0].length - data.length + 1
    test_t = calc_t.map(value => jStat.ttest(value, dof_f))
    console.log(test_t)
    console.log(n_dat_use)
    console.log(total_dof)
    console.log(res_dof)
    
    //t tabelado
    let tab_t = 0
    tab_t = -jStat.studentt.inv(0.2/2, res_dof)
    console.log(tab_t)
    
    //8. PROJEÇÃO
    console.log(transf)

    //transformações de cada variável
    //valor da variável do avaliando
    //valor da variável transformada

    let asses_transf = []
    for (let i = 0; i < asses.length; i++) {
        asses_transf[i] = dataTransformation(asses[i], transf[i])

    }
    console.log(asses_transf)
    
    //estimativa calculada unitária
    let est_calculated = 0
    for (let index = 0; index < reg_C.length; index++) {
        if (index == 0) {
            est_calculated =  reg_C[index]
        }
        if (index > 0) {
            est_calculated = est_calculated + reg_C[index] * asses_transf[index]
          }
      }
    console.log(est_calculated)
    //estimativa calculada total
    let est_calculated_total = 0
    est_calculated_total = est_calculated * asses[1]
    console.log(est_calculated_total)

    //nível de confiança
    let trust_level = 0.80
    let alpha = 1 - trust_level

    //desvio padrão observado
    let sd_Y = jStat.stdev(data_Y, true)
    console.log(sd_Y)

    //valor unitário máximo e mínimo do intervalo de confiança
    //valor total máximo e mínimo do intervalo de confiança
    let conf_interval = []
    conf_interval = jStat.tci(mean_Y, alpha, data_Y)
    console.log(conf_interval)

    //fator intervalo de confiança
    let conf_int_factor = 0
    conf_int_factor = conf_interval[1] - mean_Y
    console.log(conf_int_factor)

    //amplitude do intervalo de confiança
    let conf_int_breadth = 2 * conf_int_factor / mean_Y
    console.log(conf_int_breadth)
    
    //média, moda e mediana observado
    let mode_Y = 0
    mode_Y = Math.max(...jStat.mode(data_Y))
    console.log(mode_Y)

    let median_Y = 0
    median_Y = jStat.median(data_Y)
    console.log(median_Y)

    //9. CAMPO DE ARBÍTRIO

    //limite inferior unitário, total e do campo de arbítrio
    //limite superior unitário, total e do campo de arbítrio
    let field_will = []
    field_will[0] = 0.85 * est_calculated
    field_will[1] = 1.15 * est_calculated
    console.log(field_will)

    let field_will_total = []
    field_will_total[0] =  conf_interval[0] * asses[1]
    field_will_total[1] =  conf_interval[1] * asses[1]
    console.log(field_will_total)

    let field_will_perc = []
    field_will_perc[0] =  conf_interval[0] / est_calculated - 1
    field_will_perc[1] =  conf_interval[1] / est_calculated - 1
    console.log(field_will_perc)

    //gráfico do campo de arbítrio

//10. CORRELAÇÕES
    
    let correlation = []
    for (let i = 0; i < data.length; i++) {
        correlation[i] = []

        for (let j = 0; j < data.length; j++) {
            if (i > j) {
                let num = jStat.corrcoeff(data[i], data[j])
                correlation[i][j] = num.toExponential(2)
                
            } else {
                correlation[i][j] = 1
            }
            //console.log(i,j)

        }
    }
    console.log(correlation)


    //tabela de correlações das variáveis utilizadas no modelo

    //gráfico das correlações

//11. GRÁFICO DE ADRÊNCIA

    //tabela de dados observado e estimado

    //gráfico

//12. GRÁFICO DE RESÍDUOS

    //tabela de dados estimado e res./erro padrão

    //gráfico

//13. GRÁFICO HISTOGRAMA x DISTRIBUIÇÃO NORMAL

    //tabela

    //gráfico

//14. CHEGAR NA EQUAÇÃO COM MAIOR R2, PELO CÁLCULO DA COVARIANCIA
    
let var_curve = []
let var_dependent = []
let var_transf_dependent = []
//todas variaveis utlizadas e suas transformações
for (let i = 0; i < data.length; i++) {
    var_curve[i] = [] //variaveis
    
    for (let j = 0; j < list_trasnf.length; j++) {
        //var_dependent[j] = [] //transformações das variaveis
        let curve = list_trasnf[j]
        var_curve[i][j] = []
        
        for (let k = 0; k < data[i].length; k++) {
            let number = data[i][k]
            //var_dependent[j][k] = dataTransformation(number, curve) //transformações dos dados
            var_curve[i][j][k] = dataTransformation(number, curve)
            
        }
        
    }

}

//let arrayX = [[[1],[2],[3]],[[4],[5],[6]],[[7],[8],[9]]]
//console.log(arrayX[1][1][0])
console.log(var_curve)


//todas variaveis utilizadas e seus R² parcial
for (let i = 0; i < data.length; i++) {
   var_dependent[i] = [] //transformações das variaveis
   
   for (let j = 0; j < list_trasnf.length; j++) {
       let num = jStat.corrcoeff(var_curve[0][0], var_curve[i][j])
       var_dependent[i][j] = (num*num).toFixed(4)
       //var_dependent[i][j] = (num*num).toExponential(3)
       //var_dependent[i][j] = (num*num).toExponential(2)
       
       //console.log(var_curve[i][j])
    }

}
console.log(var_dependent)
