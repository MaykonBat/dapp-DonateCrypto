"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { doLogin } from "@/services/Web3Services";

export default function Home() {


    const { push } = useRouter();

    const [message, setMessage] = useState("");

    function btnLoginClick(){

        setMessage("Conecting... wait...")
        doLogin()
          .then(account => push("/create"))
          .catch(err => {
            console.error(err);
            setMessage(err.message);
          })
    }


  return (
  <>
  <div className="container px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-6">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOetCDIH7yth-fY3THKfi2eVDf2n0r3Rn3A&s" className="d-block mx-lg-auto img-fluid" width="700" height="500" />
      </div>
      <div className="col-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Donate Crypto</h1>
        <p className="lead">Your decentralized platform for donations.</p>
        <p className="lead">Connect your wallet and create your campaign.</p>
        <p className="lead mb-3">For donations, use the campaign link.</p>
        <div className="d-flex justify-content-start mb-5">
          <button type="button" className="btn btn-primary btn-lg px-4 me-2" onClick={btnLoginClick}>
            <img src="/metamask.png" width="200" height="50" className="me-2"/>
              Connect
          </button>
        </div>
        {
          message
          ? <div className="alert alert-success p-3 col-12" role="alert">{message}</div>
          : <></>
        }
      </div>
    </div>
  </div>
  </>
  );
}
