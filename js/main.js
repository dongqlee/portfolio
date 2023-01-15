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
const p1_btnVweb = document.querySelector('.project01 .btn_v_web');
const p1_btnVmob = document.querySelector('.project01 .btn_v_mob');
const p1_web =document.querySelector('.project01 .web_img');
const p1_mob =document.querySelector('.project01 .mob_img');

p1_btnVweb.addEventListener('click', () => {
  p1_btnVweb.style.cssText = 'opacity: 1; text-decoration: underline;'
  p1_btnVmob.style.cssText = 'opacity: 0.5; text-decoration: none;'
  p1_web.style.display = 'block'
  p1_mob.style.display = 'none'
});
p1_btnVmob.addEventListener('click', () => {
  p1_btnVmob.style.cssText = 'opacity: 1; text-decoration: underline;'
  p1_btnVweb.style.cssText = 'opacity: 0.5; text-decoration: none;'
  p1_mob.style.display = 'block'
  p1_web.style.display = 'none'
});

//
const p1_btnGit = document.querySelector('.project01 .btn_github');
const p1_btnGit01 = document.querySelector('.project01 .btn_github01');
const p1_iconGit01 = document.querySelector('.project01 .github_inner .icon01');
const p1_iconGit02 = document.querySelector('.project01 .github_inner .icon02');

const p2_btnGit = document.querySelector('.project02 .btn_github');
const p2_btnGit01 = document.querySelector('.project02 .btn_github01');
const p2_iconGit01 = document.querySelector('.project02 .github_inner .icon01');
const p2_iconGit02 = document.querySelector('.project02 .github_inner .icon02');

const p3_btnGit = document.querySelector('.project03 .btn_github');
const p3_btnGit01 = document.querySelector('.project03 .btn_github01');
const p3_iconGit01 = document.querySelector('.project03 .github_inner .icon01');
const p3_iconGit02 = document.querySelector('.project03 .github_inner .icon02');

const p1_btnWeb = document.querySelector('.project01 .btn_webpage');
const p1_btnWeb01 = document.querySelector('.project01 .btn_webpage01');
const p1_iconWeb01 = document.querySelector('.project01 .webpage_inner .icon01');
const p1_iconWeb02 = document.querySelector('.project01 .webpage_inner .icon02');

const p2_btnWeb = document.querySelector('.project02 .btn_webpage');
const p2_btnWeb01 = document.querySelector('.project02 .btn_webpage01');
const p2_iconWeb01 = document.querySelector('.project02 .webpage_inner .icon01');
const p2_iconWeb02 = document.querySelector('.project02 .webpage_inner .icon02');

const p3_btnWeb = document.querySelector('.project03 .btn_webpage');
const p3_btnWeb01 = document.querySelector('.project03 .btn_webpage01');
const p3_iconWeb01 = document.querySelector('.project03 .webpage_inner .icon01');
const p3_iconWeb02 = document.querySelector('.project03 .webpage_inner .icon02');


p1_btnGit.addEventListener('mouseenter', () => {
  p1_btnGit01.style.cssText = 'transition: all 0.3s; width: 180px;'
  p1_iconGit01.style.cssText = 'transition: all 0.7s 0.1s; left: 160px; opacity: 0;'
  p1_iconGit02.style.cssText = 'transition: all 0.3s 0.3s; opacity: 1;'
})

p1_btnGit.addEventListener('mouseleave', () => {
  p1_btnGit01.style.cssText = 'transition: all 0.3s; width: 50px;'
  p1_iconGit01.style.cssText = 'transition: all 0.1s 0.1s; left: 20px;'
  p1_iconGit02.style.cssText = 'transition: all 0.1s; opacity: 0;'
})

p1_btnWeb.addEventListener('mouseenter', () => {
  p1_btnWeb01.style.cssText = 'transition: all 0.3s; width: 180px;'
  p1_iconWeb01.style.cssText = 'transition: all 0.7s 0.1s; left: 160px; opacity: 0;'
  p1_iconWeb02.style.cssText = 'transition: all 0.3s 0.3s; opacity: 1;'
})

p1_btnWeb.addEventListener('mouseleave', () => {
  p1_btnWeb01.style.cssText = 'transition: all 0.3s; width: 50px;'
  p1_iconWeb01.style.cssText = 'transition: all 0.1s 0.1s; left: 20px;'
  p1_iconWeb02.style.cssText = 'transition: all 0.1s; opacity: 0;'
})

p2_btnGit.addEventListener('mouseenter', () => {
  p2_btnGit01.style.cssText = 'transition: all 0.3s; width: 180px;'
  p2_iconGit01.style.cssText = 'transition: all 0.7s 0.1s; left: 160px; opacity: 0;'
  p2_iconGit02.style.cssText = 'transition: all 0.3s 0.3s; opacity: 1;'
})

p2_btnGit.addEventListener('mouseleave', () => {
  p2_btnGit01.style.cssText = 'transition: all 0.3s; width: 50px;'
  p2_iconGit01.style.cssText = 'transition: all 0.1s 0.1s; left: 20px;'
  p2_iconGit02.style.cssText = 'transition: all 0.1s; opacity: 0;'
})

p2_btnWeb.addEventListener('mouseenter', () => {
  p2_btnWeb01.style.cssText = 'transition: all 0.3s; width: 180px;'
  p2_iconWeb01.style.cssText = 'transition: all 0.7s 0.1s; left: 160px; opacity: 0;'
  p2_iconWeb02.style.cssText = 'transition: all 0.3s 0.3s; opacity: 1;'
})

p2_btnWeb.addEventListener('mouseleave', () => {
  p2_btnWeb01.style.cssText = 'transition: all 0.3s; width: 50px;'
  p2_iconWeb01.style.cssText = 'transition: all 0.1s 0.1s; left: 20px;'
  p2_iconWeb02.style.cssText = 'transition: all 0.1s; opacity: 0;'
})

p3_btnGit.addEventListener('mouseenter', () => {
  p3_btnGit01.style.cssText = 'transition: all 0.3s; width: 180px;'
  p3_iconGit01.style.cssText = 'transition: all 0.7s 0.1s; left: 160px; opacity: 0;'
  p3_iconGit02.style.cssText = 'transition: all 0.3s 0.3s; opacity: 1;'
})

p3_btnGit.addEventListener('mouseleave', () => {
  p3_btnGit01.style.cssText = 'transition: all 0.3s; width: 50px;'
  p3_iconGit01.style.cssText = 'transition: all 0.1s 0.1s; left: 20px;'
  p3_iconGit02.style.cssText = 'transition: all 0.1s; opacity: 0;'
})

p3_btnWeb.addEventListener('mouseenter', () => {
  p3_btnWeb01.style.cssText = 'transition: all 0.3s; width: 180px;'
  p3_iconWeb01.style.cssText = 'transition: all 0.7s 0.1s; left: 160px; opacity: 0;'
  p3_iconWeb02.style.cssText = 'transition: all 0.3s 0.3s; opacity: 1;'
})

p3_btnWeb.addEventListener('mouseleave', () => {
  p3_btnWeb01.style.cssText = 'transition: all 0.3s; width: 50px;'
  p3_iconWeb01.style.cssText = 'transition: all 0.1s 0.1s; left: 20px;'
  p3_iconWeb02.style.cssText = 'transition: all 0.1s; opacity: 0;'
})

let modalBox = document.createElement('div');
modalBox.setAttribute('class', 'modal_box');

let proposalBox = document.createElement('div');
proposalBox.setAttribute('class', 'proposal_box');

modalBox.appendChild(proposalBox);
body.appendChild(modalBox);

