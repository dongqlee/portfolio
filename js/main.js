//
const pointer = document.querySelector('.pointer');
document.addEventListener('mousemove', (e) => {
  const mouseX = e.pageX;
  const mouseY = e.pageY;
  pointer.style.left = mouseX + 'px';
  pointer.style.top = mouseY + 'px';
  pointer.style.diplay = 'block'
}); //mousemove

document.addEventListener('mouseover', () => {
  pointer.style.display = 'block'
});
document.addEventListener('mouseout', () => {
  pointer.style.display = 'none'
});

//
const mainLogo = document.getElementById('logo')
mainLogo.animate({
  left: '-60px',
  transform: 'rotate(-90deg)'
}, {
  duration: 600,
  fill: "forwards"
  }
)

//
const intro = document.getElementById('intro')
const profile = document.getElementById('profile')
const project = document.getElementById('project')
const contact = document.getElementById('contact')
const pageProfile =document.querySelector('.profile_box')
const pageproject =document.querySelector('.project_box01')
const pageContact =document.querySelector('.contact_box')

intro.addEventListener('click', () => {
  window.scrollTo({
    top:0,
    left:0,
    behavior: 'smooth'
  })
})

profile.addEventListener('click', () => {
  window.scrollTo({
    top: pageProfile.offsetTop,
    left: 0,
    behavior: 'smooth'
  })
})

project.addEventListener('click', () => {
  window.scrollTo({
    top: pageproject.offsetTop,
    left: 0,
    behavior: 'smooth'
  })
})

contact.addEventListener('click', () => {
  window.scrollTo({
    top: pageContact.offsetTop,
    left: 0,
    behavior: 'smooth'
  })
})





//
const txtBox01 = document.querySelector('.txt_box01')

txtBox01.animate({
  opacity: 1
}, {
  duration: 500,
  fill: 'forwards'
})

const txtBox02 = document.querySelector('.txt_box02')
txtBox02.animate({
  opacity: 1
}, {
  duration: 1000,
  delay: 700,
  fill: 'forwards'
})

const imgBox =document.querySelector('.img_box')
imgBox.animate({
  top: '200px'
}, {
  duration: 1000,
  delay: 700,
  fill: 'forwards'
})
const upDate = document.querySelector('.update')
upDate.animate({
  width: '187px'
}, {
  duration: 1500,
  delay: 1200,
  fill: 'forwards'
})


//skill_tab
const skill01 = document.querySelector('.skill01')
const skill02 = document.querySelector('.skill02')
const skill03 = document.querySelector('.skill03')
const skill04 = document.querySelector('.skill04')
const skill05 = document.querySelector('.skill05')
const skill06 = document.querySelector('.skill06')
const skill07 = document.querySelector('.skill07')
const skill08 = document.querySelector('.skill08')
const skill09 = document.querySelector('.skill09')
const skill10 = document.querySelector('.skill10')

window.addEventListener('scroll', () => {
  let winScroll = window.scrollY
  if(winScroll > 200) {
    skill01.animate({
      transform: 'translateY(0px)'
    },{
      duration: 1000,
      fill: "forwards"
    })
  }

  if(winScroll > 400) {
    skill02.animate({
      transform: 'translateY(0px)'
    },{
      duration: 1000,
      fill: "forwards"
    }),
    skill03.animate({
      transform: 'translateY(0px)'
    },{
      duration: 1000,
      delay: 200,
      fill: "forwards"
    })
  }

  if(winScroll > 600) {
    skill04.animate({
      transform: 'translateY(0px)'
    },{
      duration: 1000,
      fill: "forwards"
    }),
    skill05.animate({
      transform: 'translateY(0px)'
    },{
      duration: 1000,
      delay: 200,
      fill: "forwards"
    }),
    skill06.animate({
      transform: 'translateY(0px)'
    },{
      duration: 1000,
      delay: 400,
      fill: "forwards"
    })
  }
  if(winScroll > 800) {
    skill07.animate({
      transform: 'translateY(0px)'
    },{
      duration: 1000,
      fill: "forwards"
    }),
    skill08.animate({
      transform: 'translateY(0px)'
    },{
      duration: 1000,
      delay: 200,
      fill: "forwards"
    }),
    skill09.animate({
      transform: 'translateY(0px)'
    },{
      duration: 1000,
      delay: 400,
      fill: "forwards"
    }),
    skill10.animate({
      transform: 'translateY(0px)'
    },{
      duration: 1000,
      delay: 600,
      fill: "forwards"
    })
  }
})

//
const btnGit = document.querySelector('.btn_github');
const btnGit01 = document.querySelector('.btn_github01');
const iconGit01 = document.querySelector('.github_inner .icon01');
const iconGit02 = document.querySelector('.github_inner .icon02')

const btnWeb = document.querySelector('.btn_webpage');
const btnWeb01 = document.querySelector('.btn_webpage01');
const iconWeb01 = document.querySelector('.webpage_inner .icon01');
const iconWeb02 = document.querySelector('.webpage_inner .icon02');

btnGit.addEventListener('mouseenter', () => {
  btnGit01.style.cssText = 'transition: all 0.3s; width: 180px;'
  iconGit01.style.cssText = 'transition: all 0.7s 0.1s; left: 160px; opacity: 0;'
  iconGit02.style.cssText = 'transition: all 0.3s 0.3s; opacity: 1;'
})

btnGit.addEventListener('mouseleave', () => {
  btnGit01.style.cssText = 'transition: all 0.3s; width: 50px;'
  iconGit01.style.cssText = 'transition: all 0.1s 0.1s; left: 20px;'
  iconGit02.style.cssText = 'transition: all 0.1s; opacity: 0;'
})

btnWeb.addEventListener('mouseenter', () => {
  btnWeb01.style.cssText = 'transition: all 0.3s; width: 180px;'
  iconWeb01.style.cssText = 'transition: all 0.7s 0.1s; left: 160px; opacity: 0;'
  iconWeb02.style.cssText = 'transition: all 0.3s 0.3s; opacity: 1;'
})

btnWeb.addEventListener('mouseleave', () => {
  btnWeb01.style.cssText = 'transition: all 0.3s; width: 50px;'
  iconWeb01.style.cssText = 'transition: all 0.1s 0.1s; left: 20px;'
  iconWeb02.style.cssText = 'transition: all 0.1s; opacity: 0;'
})

let modalBox = document.createElement('div')

modalBox.setAttribute('class', 'modal_box')