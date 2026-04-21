nome = input("Digite seu nome: ")
idade = int(input("digite sua idade: "))
if idade >= 18:
    classif = "maior de idade" 
else:
    classif = "menor de idade"
print(f"Olá {nome}, você tem {idade} anos e é {classif} ")
continuar = input("Digite 'exit' para sair?")
while continuar.lower() != "exit":
    continuar = input("Comando errado, tente novamente com 'exit': ")
    
print("tchau!")   