//Referenciák:
const button = document.querySelector( "#button" );
const addressInput = document.querySelector( "#address" );
//Event handlers:
/*button.addEventListener('click', function ( e ) {
    const address = addressInput.value;
    console.log( address );
    const xhr = new XMLHttpRequest( );
    xhr.addEventListener( "load" , responseHandler );
    xhr.open( "GET" , `https://nominatim.openstreetmap.org/?addressdetails=1&q=${address}&format=json&limit=1` );
    xhr.responseType = "json";
    xhr.send( null );
    
});*/
button.addEventListener('click', async function ( e ) {
    const address = addressInput.value;
    const response = await fetch( `https://nominatim.openstreetmap.org/?addressdetails=1&q=${address}&format=json&limit=1`);
    const addressDetails = await response.json( );
    const { lat, lon: long } = addressDetails[ 0 ];
    console.log( lat, long );
});
function responseHandler( ) {
    console.log( this.response );
    const { lat, lon: long } = this.response[ 0 ];
    /*  Use above instead of this: 
        const lat  = this.response[ 0 ].lat;
        const lon  = this.response[ 0 ].lon;
    */
    console.log( lat, long );
  }