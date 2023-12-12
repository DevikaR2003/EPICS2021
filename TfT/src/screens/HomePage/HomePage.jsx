import React from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { PrimaryButton } from "../../components/PrimaryButton";
import { SecondaryButton } from "../../components/SecondaryButton";
import "./style.css";

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="div-2">
        <Footer
          className="footer-instance"
          groupClassName="design-component-instance-node-2"
          hasDiv={false}
          overlapClassName="footer-2"
          text="Trash for Treasure"
        />
        <div className="events-section">
          <div className="event">
            <div className="content">
              <div className="arrow-button">
                <img className="arrow" alt="Arrow" src="/img/arrow-1.svg" />
              </div>
              <div className="event-title">
                <div className="overlap-group-2">
                  <p className="text-wrapper-11">Seminar: Caring for children with autism</p>
                  <div className="event-header">
                    <div className="next-events">NEXT EVENTS</div>
                    <img className="line" alt="Line" src="/img/line-7.svg" />
                  </div>
                </div>
              </div>
              <div className="date">
                <div className="text-wrapper-12">25</div>
                <div className="apr">APR</div>
              </div>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="content">
              <div className="arrow-button">
                <img className="arrow" alt="Arrow" src="/img/arrow-1.svg" />
              </div>
              <div className="event-title">
                <div className="overlap-group-2">
                  <p className="text-wrapper-11">A day with our wonderful children</p>
                  <div className="event-header">
                    <div className="next-events">NEXT EVENTS</div>
                    <img className="line" alt="Line" src="/img/line-7.svg" />
                  </div>
                </div>
              </div>
              <div className="date">
                <div className="text-wrapper-12">13</div>
                <div className="apr">APR</div>
              </div>
            </div>
          </div>
          <div className="section-title">
            <div className="text-wrapper-13">Our Events</div>
            <img className="img" alt="Line" src="/img/line-6.svg" />
          </div>
        </div>
        <div className="CTA">
          <div className="content-2">
            <div className="button-row">
              <PrimaryButton className="design-component-instance-node-3" text="Join as a volunteer" />
              <SecondaryButton className="secondary-button-2" text="Donate" />
            </div>
            <p className="text-wrapper-14">You can contribute to provide a place for children with special needs!</p>
          </div>
        </div>
        <div className="stats-section">
          <div className="overlap-2">
            <div className="BG-2" />
            <div className="chart">
              <div className="overlap-group-3">
                <img className="ellipse" alt="Ellipse" src="/img/ellipse-4.svg" />
                <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-3.svg" />
                <img className="ellipse-3" alt="Ellipse" src="/img/ellipse-2.svg" />
                <img className="ellipse-4" alt="Ellipse" src="/img/ellipse-1.svg" />
                <img className="ellipse-5" alt="Ellipse" src="/img/ellipse.svg" />
              </div>
              <div className="group-3">
                <div className="text-wrapper-15">largerthan</div>
                <div className="text-wrapper-16">i</div>
              </div>
            </div>
            <div className="text">
              <div className="text-row">
                <p className="text-wrapper-17">How we spend your donations and where it goes</p>
                <p className="text-wrapper-18">
                  We understand that when you make a  donation, you want to know exactly where your money is going and
                  we pledge to be transparent.
                </p>
              </div>
              <div className="stats-row">
                <div className="stats">
                  <div className="text-wrapper-19">40% child care home</div>
                  <div className="rectangle" />
                </div>
                <div className="stats-2">
                  <div className="text-wrapper-19">10% excursions</div>
                  <div className="rectangle-2" />
                </div>
                <div className="stats-3">
                  <div className="text-wrapper-19">35% cleanliness program</div>
                  <div className="rectangle-3" />
                </div>
                <div className="stats-4">
                  <div className="text-wrapper-19">5% feeding the poor</div>
                  <div className="rectangle-4" />
                </div>
                <div className="stats-5">
                  <div className="text-wrapper-19">10% helping people</div>
                  <div className="rectangle-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="projects">
          <div className="project-row">
            <div className="project">
              <div className="overlap-group-4">
                <div className="tint" />
                <div className="content-3">
                  <SecondaryButton className="secondary-button-3" text="Learn more" />
                  <p className="text-wrapper-20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                  </p>
                  <div className="text-wrapper-21">Monthly public awareness</div>
                </div>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-group-4">
                <div className="tint" />
                <div className="content-3">
                  <SecondaryButton className="secondary-button-3" text="Learn more" />
                  <p className="text-wrapper-22">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                  </p>
                  <div className="text-wrapper-21">Weekly excursions</div>
                </div>
              </div>
            </div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group-4">
                <img className="unsplash-cveoh-jjmee" alt="Unsplash cveoh jjmee" src="/img/unsplash-cveoh-jjmee.png" />
                <div className="tint" />
                <div className="content-3">
                  <SecondaryButton className="secondary-button-3" text="Learn more" />
                  <p className="text-wrapper-20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                  </p>
                  <p className="text-wrapper-21">Mission smile 1k: Outdoor charity</p>
                </div>
              </div>
            </div>
          </div>
          <div className="overlap-3">
            <p className="text-wrapper-23">We are creating a place where children with special needs can thrive</p>
            <div className="section-title-2">
              <div className="projects-we-have">PROJECTS WE HAVE DONE</div>
              <img className="line-2" alt="Line" src="/img/line-5.svg" />
            </div>
          </div>
        </div>
        <div className="what-we-do">
          <img className="unsplash" alt="Unsplash" src="/img/unsplash-sbiak0pkuie.png" />
          <div className="functions">
            <img className="line-3" alt="Line" src="/img/line-4.svg" />
            <div className="function">
              <p className="text-wrapper-24">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
              <div className="text-wrapper-25">Therapy</div>
              <div className="icon">
                <img className="vector" alt="Vector" src="/img/vector-3.svg" />
              </div>
            </div>
            <div className="function-2">
              <p className="text-wrapper-24">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
              <div className="text-wrapper-25">Scholarships</div>
              <div className="icon">
                <img className="vector-2" alt="Vector" src="/img/vector-2.svg" />
              </div>
            </div>
            <div className="function-3">
              <p className="text-wrapper-24">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
              <div className="text-wrapper-25">Health benefits</div>
              <div className="icon">
                <img className="vector-3" alt="Vector" src="/img/vector-1.svg" />
              </div>
            </div>
            <div className="function-4">
              <p className="text-wrapper-26">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
              <div className="text-wrapper-25">Family support</div>
              <div className="icon">
                <img className="vector-4" alt="Vector" src="/img/vector.svg" />
              </div>
            </div>
          </div>
          <div className="overlap-4">
            <div className="text-2">
              <p className="text-wrapper-27">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                tristique.
              </p>
              <p className="text-wrapper-28">Some services we provide for our children</p>
            </div>
            <div className="section-title-3">
              <div className="what-we-do-2">WHAT WE DO</div>
              <img className="line-2" alt="Line" src="/img/line-3.svg" />
            </div>
          </div>
        </div>
        <div className="about-section">
          <div className="bottom-row">
            <img className="logo-row" alt="Logo row" src="/img/logo-row.png" />
            <div className="title-row">
              <img className="line-4" alt="Line" src="/img/line-2.svg" />
              <div className="our-supporters">OUR SUPPORTERS</div>
            </div>
          </div>
          <div className="top-row">
            <div className="video">
              <img className="play-icon" alt="Play icon" src="/img/play-icon-1.png" />
            </div>
            <div className="text-3">
              <PrimaryButton className="primary-button-instance" text="Learn more" />
              <p className="lorem-ipsum-dolor">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                tristique.
                <br />
                <br />
                ‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
                posuere.
              </p>
              <div className="overlap-group-5">
                <p className="text-wrapper-29">We provide a place for children with special needs</p>
                <div className="section-title-4">
                  <div className="know-about-us">KNOW ABOUT US</div>
                  <img className="line-2" alt="Line" src="/img/line-1.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <header className="header">
          <div className="statistics">
            <p className="text-wrapper-30">230 children under our care</p>
            <div className="text-wrapper-31">58 donations collected</div>
            <img className="line-5" alt="Line" src="/img/line.svg" />
          </div>
          <div className="header-text">
            <p className="transforming-trash">
              &#34;Transforming Trash into Treasured Moments: Where Discards Find a New Purpose!&#34;
            </p>
            <div className="button-row-2">
              <div className="video-button">
                <img className="play-icon-2" alt="Play icon" src="/img/play-icon.png" />
                <div className="text-wrapper-32">Play Video</div>
              </div>
              <SecondaryButton className="design-component-instance-node-3" text="What we do" />
            </div>
          </div>
        </header>
        <Navbar
          className="navbar-instance"
          divClassName="navbar-2"
          groupClassName="design-component-instance-node-2"
          hasDiv={false}
          text="Trash for Treasure"
        />
      </div>
    </div>
  );
};
