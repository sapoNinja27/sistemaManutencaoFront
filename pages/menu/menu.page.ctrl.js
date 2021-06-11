angular.module("sistemaManutencao").controller("menuPageCtrl", function ($route,$scope, $location,usuario,storageAPI,authAPI) {
    if(storageAPI.getLocalUser().perfil ==null){
        authAPI.atualizarUsuario(usuario.data);
        $route.reload();
    }
    $scope.user=storageAPI.getLocalUser();
    
    
    $scope.novoPedido=function(){
        $location.path("/adicionarPedido");
    }
    $scope.novoCliente=function(){
        $location.path("/adicionarCliente");
    }
	$scope.tabelaPedido=function(){
        $location.path("/listarPedidos");
    }
    $scope.tabelaCliente=function(){
        $location.path("/listarClientes");
    }
    $scope.acessoRestrito=function(){
        let aprovado = false;
        if($scope.user.perfil=="ADMIN"){
            aprovado = true;
        }else{
            $scope.user.perfil.forEach(perfil => {
                if(perfil=="RECEPCIONISTA"){
                    aprovado= true;
                }
            });
        }
        return aprovado;
        
    }
});