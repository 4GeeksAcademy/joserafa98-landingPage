import React from "react";
const Jumbotron = () =>{
    return (
        <div class="container py-4">
        <header class="pb-3 mb-4 border-bottom"></header> 
        <div class="p-5 mb-4 bg-body-tertiary rounded-3">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">Custom jumbotron</h1>
                <p class="col-md-8 fs-4">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <button class="btn btn-primary btn-lg" type="button">Example button</button>
            </div>
        </div>
    </div>    
    );
}
export default Jumbotron