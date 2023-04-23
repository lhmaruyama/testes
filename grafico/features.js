//1. DADOS E VARIÁVEIS DO MODELO
    //total de variáveis coletadas do modelo
    let n_var_col = table.length - 3
    console.log(n_var_col) 
    //total de variáveis utilizadas no modelo
    let n_var_use = data.length - 1
    console.log(n_var_use) 
    //total de dados coletados do modelo
    let n_dat_col = table[0].length - 2
    console.log(n_dat_col) 
    //total de dados utilizados no modelo
    let n_dat_use = data[0].length
    console.log(n_dat_use) 

//2. ESTATÍSTICA DO MODELO
    let data_Y = data[0]
    console.log(data_Y)

    let mean_Y = jStat.mean(data[0])
    console.log(mean_Y.toFixed(2))

    let total_sum_sq = sumSquaresArrayNumber(data_Y, mean_Y)
    console.log(total_sum_sq.toFixed(2))

    let res_sum_sq = 0
/*     let ataque = [5, 13, 20, 28, 41, 49, 61, 62]
    let duracao = [118, 132, 119, 153, 91, 118, 132, 105]
    let Y = [8.1, 6.8, 7, 7.4, 7.7, 7.5, 7.6, 8]
    const matrix = [Y, ataque, duracao] */
    console.log(regressionCoefficients(data))


    //coeficiente de correlação R
    let coef_R = 0
    //console.log(jStat.combination(4,2))
    //coeficiente de determinação R2
    let coef_R2 = 0
    //coeficiente de determinação R2 ajustado
    let coef_R2aj = 0
    //desvio padrão / erro padrão
    let stan_dev = 0
    //Fisher - Snedecor calculado
    let calc_F = 0
    //significância do modelo
    let mod_sig = 0
    //Fisher - Snedecor tabelado
    let tab_F = 0

//3. NORMALIDADE DOS RESÍDUOS
    //quantidade e porcentagem dos resíduos situados entre -1s e +1s
    let n_nor_res_68p = 0
    //quantidade e porcentagem dos resíduos situados entre -1,64s e +1,64s
    let n_nor_res_90p = 0
    //quantidade e porcentagem dos resíduos situados entre -1,96s e +1,96s
    let n_nor_res_95p = 0

//4. OUTLIERS DO MODELO DE REGRESSÃO
    //quantidade e porcentagem dos resíduos situados entre -2s e +2s
    let n_out_liers = 0

//5. ANÁLISE DA VARIÂNCIA (ANOVA)
    //soma dos quadrados - explicada (regressão)
    let reg_sum_sq = 0
    //soma dos quadrados - não explicada (resíduos)
    //let res_sum_sq = 0
    //soma dos quadrados - total
    //let total_sum_sq = 0
    //graus de liberdade - explicada (regressão)
    let reg_dof = 0
    //graus de liberdade - não explicada (resíduos)
    let res_dof = 0
    //graus de liberdade - total
    let total_dof = 0
    //quadrado médio - explicada (regressão)
    let reg_mean_sq
    //quadrado médio - não explicada (resíduos)
    let res_mean_sq
    //F
    //let calc_F = 0
    
//6. EQUAÇÃO DA REGRESSÃO
    //coeficientes da equação mtx, vct e ary
    let b_reg_coef
    //equação da regressão
    let eq_reg

//7. TESTES DE HIPÓTESE
    //t calculado
    let calc_t
    //significância
    let t_sign
    //t tabelado
    let tab_t

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