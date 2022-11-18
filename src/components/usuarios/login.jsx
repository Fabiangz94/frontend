function LoginView(props){
    return (
        <div className="w-75 mx-auto">
            <form>
                <img className="mb-4" src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating my-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating my-3">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="button">Sign in</button>
                <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
            </form>

        </div>
    );
}

export default LoginView;