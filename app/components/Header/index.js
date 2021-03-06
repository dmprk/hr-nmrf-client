import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { palette } from 'styled-theme';

import appMessages from 'containers/App/messages';
import messages from './messages';

import Logo from './Logo';
import Banner from './Banner';
import Brand from './Brand';
import BrandText from './BrandText';
import BrandTitle from './BrandTitle';
import BrandClaim from './BrandClaim';
import NavPages from './NavPages';
import LinkPage from './LinkPage';
import NavAccount from './NavAccount';
import LinkAccount from './LinkAccount';
import NavMain from './NavMain';
import LinkMain from './LinkMain';

import logo from './sadataLogo.png';

const Styled = styled.div`
  position: ${(props) => props.isHome ? 'relative' : 'absolute'};
  top:0;
  left:0;
  right:0;
  height:115px;
  background-color: ${palette('primary', 2)};
`;


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  onClick = (evt, path) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    this.props.onPageLink(path);
  }

  render() {
    const { pages, navItems, isSignedIn, currentPath, isHome } = this.props;

    return (
      <Styled isHome={isHome}>
        <Banner showPattern={!isHome}>
          { !isHome &&
            <Brand href={'/'} onClick={(evt) => this.onClick(evt, '/')}>
              <Logo src={logo} alt="logo" />
              <BrandText>
                <BrandTitle>
                  <FormattedMessage {...appMessages.app.title} />
                </BrandTitle>
                <BrandClaim>
                  <FormattedMessage {...appMessages.app.claim} />
                </BrandClaim>
              </BrandText>
            </Brand>
          }
          <NavAccount>
            {isSignedIn &&
              <span>
                <LinkAccount
                  href={`/users/${this.props.userId}`}
                  onClick={(evt) => this.onClick(evt, `/users/${this.props.userId}`)}
                >
                  <FormattedMessage {...messages.user} />
                </LinkAccount>
                <LinkAccount href={'/logout'} onClick={(evt) => this.onClick(evt, '/logout')}>
                  <FormattedMessage {...messages.logout} />
                </LinkAccount>
              </span>
            }
            {!isSignedIn &&
              <span>
                <LinkAccount href={'/register'} onClick={(evt) => this.onClick(evt, '/register')}>
                  <FormattedMessage {...messages.register} />
                </LinkAccount>
                <LinkAccount href={'/login'} onClick={(evt) => this.onClick(evt, '/login')}>
                  <FormattedMessage {...messages.login} />
                </LinkAccount>
              </span>
            }
          </NavAccount>
          <NavPages>
            { pages &&
              pages.map((page, i) => (
                <LinkPage
                  key={i}
                  href={page.path}
                  active={page.active || currentPath === page.path}
                  onClick={(evt) => this.onClick(evt, page.path)}
                >
                  {page.title}
                </LinkPage>
              ))
            }
          </NavPages>
        </Banner>
        <NavMain hasBorder={isHome}>
          { navItems &&
            navItems.map((item, i) => (
              <LinkMain
                key={i}
                href={item.path}
                active={item.active || currentPath.startsWith(item.path)}
                onClick={(evt) => this.onClick(evt, item.path)}
              >
                {item.title}
              </LinkMain>
            ))
          }
        </NavMain>
      </Styled>
    );
  }
}

Header.propTypes = {
  isSignedIn: React.PropTypes.bool,
  userId: React.PropTypes.string,
  currentPath: React.PropTypes.string,
  pages: React.PropTypes.array,
  navItems: React.PropTypes.array,
  onPageLink: React.PropTypes.func.isRequired,
  isHome: React.PropTypes.bool, // not shown on home page
};

Header.defaultProps = {
  isHome: true,
};

export default Header;
