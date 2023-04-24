//1. DADOS E VARIÁVEIS DO MODELO
    //total de variáveis coletadas do modelo
    let n_var_col = 0
    n_var_col = table.length - 3
    console.log(n_var_col) 
    //total de variáveis utilizadas no modelo
    let n_var_use = 0
    n_var_use = data.length - 1
    console.log(n_var_use) 
    //total de dados coletados do modelo
    let n_dat_col = 0
    n_dat_col = table[0].length - 2
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
    res_sum_sq =  sumSquaresArrayArray(data_Y, reg_P)
    console.log(res_sum_sq.toFixed(2))

    let reg_sum_sq =  0
    reg_sum_sq =  sumSquaresArrayNumber(reg_P, mean_Y)
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
    let var_trasnformations = ["y", "x", "1/x", "x²", "1/x²", "e(x)", "1/e(x)", "ln(x)", "1/ln(x)"]
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
    //console.log(n_dat_use)
    //console.log(total_dof)
    //console.log(res_dof)

    //t tabelado
    let tab_t = 0
    tab_t = -jStat.studentt.inv(0.2/2, res_dof)
    console.log(tab_t)

//8. PROJEÇÃO
    //transformações de cada variável
    
    //valor da variável do avaliando
    
    //valor da variável transformada

    //estimativa calculada unitária

    //estimativa calculada total

    //nível de confiança

    //desvio padrão observado

    //fator intervalo de confiança

    //média, moda e mediana observado

    //amplitude do intervalo de confiança

    //valor unitário máximo e mínimo do intervalo de confiança

    //valor total máximo e mínimo do intervalo de confiança

//9. CAMPO DE ARBÍTRIO

    //limite inferior unitário, total e do campo de arbítrio

    //estimativa calculada unitário, total e do campo de arbítrio

    //limite superior unitário, total e do campo de arbítrio

    //gráfico do campo de arbítrio

//10. CORRELAÇÕES

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