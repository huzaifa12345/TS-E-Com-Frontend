import React from 'react';
import { Package, ShoppingCart, DollarSign, Tags } from 'lucide-react';

const Dashboard = ({ stats, products, categories }) => {
  return (
    <div className="row">
      {/* Stats Cards - Kids Colours Theme */}
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4">
        <div className="card" style={{ backgroundColor: '#f26522', color: 'white' }}>
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col">
                <h5 className="card-title mb-0">Total Products</h5>
                <h2 className="mb-0">{stats.totalProducts || 0}</h2>
              </div>
              <div className="col-auto">
                <Package size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4">
        <div className="card" style={{ backgroundColor: '#007bff', color: 'white' }}>
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col">
                <h5 className="card-title mb-0">Total Orders</h5>
                <h2 className="mb-0">{stats.totalOrders || 0}</h2>
              </div>
              <div className="col-auto">
                <ShoppingCart size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4">
        <div className="card" style={{ backgroundColor: '#28a745', color: 'white' }}>
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col">
                <h5 className="card-title mb-0">Total Revenue</h5>
                <h2 className="mb-0">{(stats.totalRevenue || 0).toFixed(2)}</h2>
              </div>
              <div className="col-auto">
                <DollarSign size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Products */}
      <div className="col-lg-6 mb-4">
        <div className="card">
          <div className="card-header" style={{ backgroundColor: '#262626', color: 'white' }}>
            <h5 className="mb-0" style={{ color: 'white' }}>Top Products</h5>
          </div>
          <div className="card-body">
            {products.slice(0, 5).map((product) => (
              <div
                key={product.id}
                className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom"
              >
                <div className="d-flex align-items-center flex-grow-1">
                  <img
                    src={product.image_url || '/src/assets/images/tshirt-img.png'}
                    alt={product.name}
                    className="rounded"
                    style={{ width: '48px', height: '48px', objectFit: 'cover', marginRight: '14px' }}
                  />
                  <div className="overflow-hidden">
                    <h6 className="mb-1 text-truncate" style={{ maxWidth: '220px' }}>
                      {product.name}
                    </h6>
                    <small className="text-muted d-block">
                      Rs. {Number(product.price || 0).toFixed(2)}
                    </small>
                  </div>
                </div>
                <span
                  className="ms-3"
                  style={{ color: '#f26522', fontWeight: 'bold', whiteSpace: 'nowrap' }}
                >
                  {product.stock_quantity || 0} in stock
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="col-lg-6 mb-4">
        <div className="card">
          <div className="card-header" style={{ backgroundColor: '#262626', color: 'white' }}>
            <h5 className="mb-0" style={{ color: 'white' }}>Categories</h5>
          </div>
          <div className="card-body">
            {categories.map((category) => (
              <div key={category.id} className="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom">
                <div className="d-flex align-items-center">
                  <Tags size={20} className="me-3" style={{ color: '#f26522' }} />
                  <div>
                    <h6 className="mb-1">{category.name}</h6>
                    <small className="text-muted">{category.description || 'No description'}</small>
                  </div>
                </div>
                <span className="badge badge-primary">{category.product_count || 0} products</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
