function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 order-last order-md-first">
              <div className="copyright text-center text-md-start">
                <p className="text-sm">
                  Designed and Developed by
                  <a href="#" rel="nofollow" target="_blank">
                    {" "}
                    OC-Aluu{" "}
                  </a>
                </p>
              </div>
            </div>
            {/* end col*/}
            <div className="col-md-6">
              <div className="terms d-flex justify-content-center justify-content-md-end">
                <a href="#0" className="text-sm">
                  NN@70
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
