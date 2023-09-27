const MyFooter = () => {
    return ( 
        <footer className="bg-light text-dark p-3">
        <div className="text-center">
            <a className="btn btn-outline-dark btn-social mx-1" href="#!"><i class="fab fa-fw fa-facebook-f"></i></a>
            <a className="btn btn-outline-dark btn-social mx-1" href="#!"><i class="fab fa-fw fa-twitter"></i></a>
            <a className="btn btn-outline-dark btn-social mx-1" href="#!"><i class="fab fa-fw fa-linkedin-in"></i></a>   
        </div>            
        
        <div className="copyright py-4 text-center text-dack">
            <div className="container"><small>Copyright &copy; 2023 Wanderlust Worlds </small></div>
        </div>
        </footer>
     );
}
 
export default MyFooter;