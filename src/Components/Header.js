const Header = ({ money, total }) => {
  return (
    <>
      {total > 0 && money - total !== 0 && (
        <div className="header">
          Harcayacak {money - total} $ paranız kaldı...
        </div>
      )}
      {total === 0 && (
        <div className="header">Harcamak için {money} $ paranız var !</div>
      )}
      {money - total === 0 && (
        <div className="header">Bakiyeniz bitti. Lütfen yükleme yapınız..</div>
      )}
    </>
  );
};

export default Header;
