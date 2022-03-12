import React from 'react'
import { Widget, WidgetList, WidgetListItem, WidgetTitle } from '../../styledComponents/components'
import classes from './Footer.module.css'

const footer = [
  {
    id: 1,
    title: "Others Link",
    items: [
      {id: 'item1', label: "Register", slug: '#'},
      {id: 'item2', label: "Froum", slug: '#'},
      {id: 'item3', label: "Affiliate", slug: '#'},
      {id: 'item4', label: "FAQ", slug: '#'},
    ]
  },
  {
    id: 2,
    title: "About Us",
    items: [
      {id: '2A', label: "Property FAQ", slug: '#'},
      {id: '2B', label: "Why By With US", slug: '#'},
      {id: '2C', label: "Our Agent", slug: '#'},
      {id: '2D', label: "Contact Us", slug: '#'},
    ]
  },
  {
    id: 2,
    title: "How It Work",
    items: [
      {id: '3A', label: "Tenant", slug: '#'},
      {id: '3B', label: "Landlord", slug: '#'},
      {id: '3C', label: "Agent", slug: '#'},
      {id: '3D', label: "Teams", slug: '#'},
    ]
  },
  {
    id: 4,
    title: "Resources",
    items: [
      {id: '3A', label: "Terms", slug: '#'},
      {id: '3B', label: "Licenses", slug: '#'},
      {id: '3C', label: "Become An Affiliate", slug: '#'},
      {id: '3D', label: "Help Center", slug: '#'},
    ]
  },
]

function Footer() {
  return (
    <React.Fragment>
       <section className={classes['footer']}>
          <div className={classes['container']}>
              <div className={classes['footer-nav']}>
                  <div className={classes['footer-logo']}>
                      <a href="#" className={classes['logo']}>
                        <i className={classes['fa-solid fa-house']}></i>
                        <span className={classes['logo-text']}>Villa</span>
                      </a>
                  </div>
                  <div className={classes['footer-icons']}>
                   <a href="#" className={classes['footer-icon']}><i className={classes['fa-brands fa-twitter']}></i></a>
                   <a href="#" className={classes['footer-icon']}><i className={classes['fa-brands fa-facebook-f']}></i></a>
                   <a href="#" className={classes['footer-icon']}><i className={classes['fa-brands fa-linkedin-in']}></i></a>
                  </div>
               </div>   
                  <div className={classes['footer-menu']}>
                    {footer && footer.map(item => <Widget key={item.id}>
                      <WidgetTitle>{item.title}</WidgetTitle>
                      <WidgetList>
                        { item.items && item.items.map(listItem => <WidgetListItem key={listItem.id}>
                          <a href={listItem.slug} style={{textDecoration: 'none', color: 'inherit'}}>
                            {listItem.label}
                          </a>
                        </WidgetListItem>
                        )}
                      </WidgetList>
                    </Widget>)}
                  </div>
          </div>
          <div className={classes['last-footer']}>
            <div className={classes['container']}>
              <div className={classes['ftr-item']}>
                <p className={classes['ftr-text']}>Copyright &copy; 2021 besnik.All rights reserved</p>
              </div>
              <div className={classes['ftr-btn']}>
                <a href="#" className={classes['ftr-bn']}>Privacy</a>
                <a href="#" className={classes['ftr-bn']}>Trems of Us</a>
              </div>
            </div>
          </div>
      </section>
    </React.Fragment>
  )
}

export default Footer