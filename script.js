body{
    
    background-image: url(images.png);
    background-size: cover;
  }
  
  .head{
      font-family: "Cormorant Unicase", serif;
      display: flex;
      width:100%;
      text-align: center;
      justify-content: center;
      font-size:xx-large;
      animation-name: t;
      animation-duration: 1s;
      animation-timing-function: ease-in;
  
  }
  .todo{
    height: fit-content;
  }
  span{
      color: #6d20c4; 
      text-shadow: 2px 2px 2px  rgba(113, 56, 179,1);
  }    
  .btn-outline-primary {
      box-shadow: 0px 0px 10px  rgb(20, 130, 255);
  }
  
  @keyframes t{
      0%{
          transform: translatey(-100%);
          animation-direction: alternate;
      }
  }
  .-textbar{
      display: flex;
      width:100%;
      justify-content: center;
      height:auto;
      margin-top: 10vh;
     
  }
  .-textbar input{
      
      margin:1.5px;
      padding:2px;
      width:20vw;
      height: auto;
      min-width:50px;
      font-size: xx-large;
      font-weight: bolder;
      border-radius: 10px;
      animation-name: te;
      animation-duration: 2s;
      animation-timing-function: ease-in;
  }
  @keyframes te{
      0%{
          opacity:0;
      }
      50%{
          opacity:0.5;
      }
      99%{
          opacity:1;
      }
  }
  .form-control{
      font-family: "Akaya Kanadaka", system-ui;
      box-shadow: 0px 0px 10px  rgb(20, 130, 255);
      background-image: url(images.png);
      background-size: cover;
  }
  .-textbar button{
      
      margin:1.5px;
      padding:2px;
      min-width:20px;
      width:10vw;
      border-radius: 10px;
      height: auto;
  }
  .bodyhead ,.bodybody{
      font-family: "Akaya Kanadaka", system-ui;
      display: flex;
      margin: 20px 0px;
      height:auto;
      align-items: end;
  }
  .bodyhead b , .bodybody b{
      /* font-size:xx-large; */
      animation-name:slider ;
      animation-duration: 2s;
      color: #6d20c4; 
      text-shadow: 2px 2px 6px   rgba(113, 56, 179,1)
      
  }
  @keyframes slider{
      0%{
          transform: translateX(-100%);
          animation-direction: alternate;
      }
  }
  /* #todo button{
      background-color: white;
  } */
  #button{
      animation-name:sliderleft ;
      animation-duration: 3.5s;
  }
  @keyframes sliderleft{
      0%{
          opacity:0;
      }
      50%{
          opacity:0.5;
      }
      99%{
          opacity:1;
      }
  }
  ul div{
      width:100%;
  }
  li b ,li{
      font-family: "Akaya Kanadaka", system-ui;
  
  }
  /* Extra small devices (phones, <576px) */
  @media (max-width: 575.98px) {
      .-textbar input{
      width:60vw;
      height: auto;
      font-size:x-large;
      }
  }
  
  /* Small devices (phones, 576px and up) */
  @media (min-width: 576px) and (max-width: 767.98px) {
      .-textbar input{
      display: inline-block;
      height: auto;
      width:70vw;
      font-size:x-large;
      }
      .-textbar{
          width:100%;
      }
  }
  
  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) and (max-width: 991.98px) {
      .-textbar input{
      height: auto;
      width:40vw;
      }
      .-textbar input{
          font-size:x-large;
      }
  }
  
  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) and (max-width: 1199.98px) {
      .-textbar input{
      height: auto;
      width:auto;
      }
      .-textbar input{
          font-size:x-large;
      }
  }
  
  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) and (max-width: 1399.98px) {
      .-textbar input{
      height: auto;
      width:70vw;
      }
      .-textbar input{
          font-size:x-large;
      }
  }
  
  /* Extra extra large devices (very large desktops, 1400px and up) */
  @media (min-width: 1400px) {
      .-textbar input{
      height: auto;
      width:50vw;
      }
      
  }
  /* .did li{
     
  } */
  
  #did{
      font-weight: bolder;
  }
.c{
    height:20px;
    width:20px;
    accent-color: rgb(9, 214, 255);
    box-shadow: 0px 0px 15px 3px rgba(9, 214, 255,1);
    margin-right: 10px;
    
}
