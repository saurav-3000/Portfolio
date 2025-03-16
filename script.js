document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector(".hamburger")
    const navLinks = document.querySelector(".nav-links")
  
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navLinks.classList.toggle("active")
    })
  
    // Close mobile menu when clicking on a nav link
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navLinks.classList.remove("active")
      })
    })
  
    // Header scroll effect
    const header = document.querySelector("header")
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    })
  
    // Enhanced Skill Bars Animation
    const skillItems = document.querySelectorAll(".skill-item")
  
    // Function to check if element is in viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect()
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    }
  
    // Function to animate skill bars
    function animateSkillBars() {
      skillItems.forEach((skill) => {
        if (isInViewport(skill)) {
          const level = skill.getAttribute("data-level")
          const progressBar = skill.querySelector(".skill-progress")
          const percentageElement = skill.querySelector(".skill-percentage")
  
          progressBar.style.width = `${level}%`
  
          // Animate percentage counter
          if (percentageElement) {
            const duration = 1500 // milliseconds
            const start = 0
            const end = Number.parseInt(level)
            const range = end - start
            const startTime = performance.now()
  
            function updateCounter(currentTime) {
              const elapsedTime = currentTime - startTime
              if (elapsedTime < duration) {
                const currentValue = Math.round(start + range * (elapsedTime / duration))
                percentageElement.textContent = `${currentValue}%`
                requestAnimationFrame(updateCounter)
              } else {
                percentageElement.textContent = `${end}%`
              }
            }
  
            requestAnimationFrame(updateCounter)
          }
        }
      })
    }
  
    // Initial check and add scroll event listener
    animateSkillBars()
    window.addEventListener("scroll", animateSkillBars)
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        if (targetId === "#") return
  
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          const headerHeight = document.querySelector("header").offsetHeight
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight
  
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Reveal animations for sections
    const revealElements = document.querySelectorAll(".reveal")
  
    function revealOnScroll() {
      revealElements.forEach((element) => {
        if (isInViewport(element)) {
          element.classList.add("active")
        }
      })
    }
  
    // Initial check and add scroll event listener
    revealOnScroll()
    window.addEventListener("scroll", revealOnScroll)
  })
  
  
