import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import styles from './Header.scss';

const AntHeader = Layout.Header;

const Header = ({ theme, menu }) => (
    <AntHeader>
        <div className={styles.logo} />
        {menu && menu.length > 0 && (
            <Menu
                className={styles.menu}
                theme={theme}
                mode="horizontal"
                defaultSelectedKeys={[menu[0].id]}
            >
                {menu.map(item => (
                    <Menu.Item key={item.id}>
                        <Link to={item.url}>
                            {item.text}
                        </Link>
                    </Menu.Item>
                ))}
            </Menu>
        )}
    </AntHeader>
);

Header.propTypes = {
    theme: PropTypes.oneOf(['dark', 'light']),
    menu: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    })),
};

Header.defaultProps = {
    theme: 'dark',
    menu: [],
};

export default Header;
