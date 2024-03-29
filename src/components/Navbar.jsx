import React, { useState, useEffect } from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons'
import Icon from '../images/logo192.png'

const Navbar = () => {
  const [btnVisible, setBtnVisible] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('load', handler)
    window.addEventListener('resize', handler)
    return () => {
      window.removeEventListener('resize', handler)
    }
  }, [])

  const handler = () => {
    console.log(111)
    if (document.body?.offsetWidth >= 800) {
      setVisible(true)
      setBtnVisible(false)
    } else {
      setVisible(false)
      setBtnVisible(true)
    }
  }

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={Icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        {btnVisible && (
          <MenuOutlined
            style={{
              color: '#fff',
              fontSize: '25px',
              cursor: 'pointer',
            }}
            onClick={() => setVisible(!visible)}
          />
        )}
      </div>
      {visible && (
        <Menu theme="dark">
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="cryptocurrencies" icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item key="exchanges" icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item key="news" icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  )
}

export default Navbar
