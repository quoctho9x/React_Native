<?php
$mang = array(
    new CaSi(0,"Son Tung","http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/e/e/ee58fcc0ff45002b8d416bd7685809ce_1487040461.jpg"),
    new CaSi(1,"Hoang Son","http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/7/f/7fdee502b70e45b4f5864df7f136ed26_1489566519.jpg"),
    new CaSi(2,"Chi Dan","http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/5/0/50e613e21b499290633d17cff0776e61_1489400967.jpg"),
    new CaSi(3,"Son Tung","http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/e/e/ee58fcc0ff45002b8d416bd7685809ce_1487040461.jpg"),
    new CaSi(4,"Hoang Son","http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/7/f/7fdee502b70e45b4f5864df7f136ed26_1489566519.jpg"),
    new CaSi(5,"Chi Dan","http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/5/0/50e613e21b499290633d17cff0776e61_1489400967.jpg"),
    new CaSi(6,"Son Tung","http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/e/e/ee58fcc0ff45002b8d416bd7685809ce_1487040461.jpg"),
    new CaSi(7,"Hoang Son","http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/7/f/7fdee502b70e45b4f5864df7f136ed26_1489566519.jpg"),
    new CaSi(8,"Chi Dan","http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/5/0/50e613e21b499290633d17cff0776e61_1489400967.jpg"),
    new CaSi(9,"Son Tung","http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/e/e/ee58fcc0ff45002b8d416bd7685809ce_1487040461.jpg"),
    new CaSi(10,"Hoang Son","http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/7/f/7fdee502b70e45b4f5864df7f136ed26_1489566519.jpg"),
    new CaSi(11,"Chi Dan","http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/5/0/50e613e21b499290633d17cff0776e61_1489400967.jpg"),
    new CaSi(12,"Son Tung","http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/e/e/ee58fcc0ff45002b8d416bd7685809ce_1487040461.jpg"),
    new CaSi(13,"Hoang Son","http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/7/f/7fdee502b70e45b4f5864df7f136ed26_1489566519.jpg"),
    new CaSi(14,"Chi Dan","http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/5/0/50e613e21b499290633d17cff0776e61_1489400967.jpg"),
    new CaSi(15,"Son Tung","http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/e/e/ee58fcc0ff45002b8d416bd7685809ce_1487040461.jpg"),
    new CaSi(16,"Hoang Son","http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/7/f/7fdee502b70e45b4f5864df7f136ed26_1489566519.jpg"),
    new CaSi(17,"Chi Dan","http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/5/0/50e613e21b499290633d17cff0776e61_1489400967.jpg"),
    new CaSi(18,"Son Tung","http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/e/e/ee58fcc0ff45002b8d416bd7685809ce_1487040461.jpg"),
    new CaSi(19,"Hoang Son","http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/7/f/7fdee502b70e45b4f5864df7f136ed26_1489566519.jpg"),
    new CaSi(20,"Chi Dan","http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/5/0/50e613e21b499290633d17cff0776e61_1489400967.jpg"),
);

$soItem1trang =3;
$page = $_GET["trang"];
$from = $page * $soItem1trang;
$mangMoi = array();
for($i=$from; $i<=$from+2 ;$i++){
    array_push($mangMoi,$mang[$i]);
}

echo json_encode($mangMoi);
  class CaSi{
  public $Id;
  public $Ten;
  public $Hinh;
  function CaSi($i,$t,$h){
    $this -> Id = $i;
    $this -> Ten = $t;
    $this -> Hinh = $h;
  }
}
?>