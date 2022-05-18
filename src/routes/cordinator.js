
export const goToSignUp = (nav)=> {
    nav('/signup')
}

export const goToLogin = (nav)=> {
    nav('/')
}

export const goToCarrinho = (nav)=> {
    nav('/carrinho')
}

export const goToRestaurante = (nav,id)=> {
    nav(`/restaurante/${id}`)
}

export const goToHome = (nav)=> {
    nav('/home')
}

export const goToPerfil = (nav)=> {
    nav('/perfil')
}

export const goToCadastro = (nav)=> {
    nav('/cadastro')
}

export const goToEditProfile = (nav)=> {
    nav('/editProfile')
}

export const goToEditAddress = (nav)=> {
    nav('/editAddress')
}