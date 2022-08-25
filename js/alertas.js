const construccion = (e)=>{
    console.log()
    Swal.fire({
        title: '<strong>Funcionalidad en construcción</strong>',
        icon: 'info',
        html:
          'Está página web todavia está en <b>construcción :P</b> ',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
}