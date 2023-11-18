'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b0411523a17e6c2449341ab64ff112eb",
".git/config": "27846f01e66abd1213f6255ec13b7362",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "27c7a1651a9fd7b2dee3db2aabbd6161",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d316092cc5f108272fd5f7bed945bbd8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "728d0206ab54871946e36b50259f637b",
".git/logs/refs/heads/main": "ae7d4cd71565dca8847697e02a4a1004",
".git/logs/refs/heads/portfolio": "0c72c1d303eacaa06a4073269a5d4c34",
".git/logs/refs/remotes/origin/firstApp": "91f9726a0df1289977a505d5c03102aa",
".git/logs/refs/remotes/origin/main": "670d837c77d595a3e99b52253a57875a",
".git/logs/refs/remotes/origin/portfolio": "f8c8f47f98ccaed6876cf03063dfa2d2",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/02/30b15855c7822b53d7ce0f4f812c37a27a5164": "3dd76d8d4b0e4ac70f88042d7124c1df",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/05/9f15758837eb1c1b0cab24110efc3799d46445": "11bdbabbc3e334830b1b439789ca4bde",
".git/objects/08/193163815b597e9e94fec0e577bd33ac82cfe2": "66f3093515357592ef14a2d87313e0dd",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0f/8711af4e629c0714803fe2a205fabedafe8637": "df7c33c86db58950f224fa141c209600",
".git/objects/15/39b33d8b3debf1f3e16f7470b8ed960c7e3299": "a3ff990102cdde6c1b59b5062ab1a20d",
".git/objects/18/6b6a4a9dfa306ecb7dcb2b0cc67326f3ca65f5": "ca23744c899d60d21bb6fcd565d138e2",
".git/objects/18/dacd950f3237bbc807688aa47d82e5f2a485c5": "9f7188ecb75ff6ca9c160b3279684afe",
".git/objects/19/6637b75901f918671007ee42d3ae71bb2a83b1": "bbc4223d488f22a0c7232794c6986fea",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1c/21218ea99d09c1fb9fb37255d70da393c0ceca": "f23e8f2de8f36d52c88d263b77fe7267",
".git/objects/1e/b79ba4ec4b164721be9437041e53aabfea0f12": "5d259a401ce3cfb33ad2aac673a7b626",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/56867e70c434d8dff86a85ca09e6d942a38257": "27d844aa56b9fd88c276a37ccf62cee6",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/21/b5823faf07b70e684cc4a6334ea418ac21b0fc": "7e6aadcf272366c90f45805c5a6e8e4e",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/29/341868fc4e7872e2237c383050a314f1e7071d": "eddd812bbe147bd5f0d3920800f1dc03",
".git/objects/2a/8953bd76b61e0039d5081c36d84e7f8a2439ae": "5febe44134eca064758bda4f84f47c83",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/ae8d6bc672b9f55f57c0a202d6cef0777fa9de": "9e608ec505f86d1d74da50b7620fc93f",
".git/objects/30/f418b2dfb161e0444f465f994dd15c89528421": "58e024aad5773c2c8b701e1b5f9c8d6c",
".git/objects/32/f8ddcd58a3a4c4e645c9b6eea1160c63e101c0": "d87e4cca784dfa3824ade6d5124a6680",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/52783cf094b50e73db42eb73229b197d8b4df8": "6a45ae36a11e25001a5ac2dc01a63381",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/38/25cda3383011185daa0ac9872d58fef9137035": "952656c19932cd723ce52b1c23edf138",
".git/objects/38/7c8e42bee4f5afc5754462288991c81bc19b79": "2392f2812a6d93217fe043b6bb04c2a6",
".git/objects/3e/ac245fee4d1adbe97ae3da9706d9547b97b307": "737570cbd4d22bd7fce326e4020344c3",
".git/objects/3e/e9a50541cbe62c11f8f45eff4d81a1bcb649e0": "b9c52e7c6144555e80231a7ebb14d684",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/45/1292fe02150646468e842939dfae5b50f2186a": "bda0248db2d418feafbf0d58a1045f3b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/842f377d76b871df6961106934886986b3efec": "3863e2fd65237cf1f9e269b65f80573d",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4a/7302c1b031733682f5eb58cbdccc03be089c4e": "23448eaf6cb5bdff9d40107beb1a2068",
".git/objects/4f/045f92926c8329f7c12f0c13ff577539e78bd1": "d6f30773b4c0de9f4e15128ab7d707d1",
".git/objects/4f/7b106c96de15f3aab91321558f5a77e856ff95": "dcb22e9effa4e70f0f508c4cfe0abf1e",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/5b/eb8840b6b32ae4a3d825889d2670a59003590f": "ff965696b8ce71a0cacf4bff6c482079",
".git/objects/5d/96651496854c0475c0c1a435dcb58d02c34d24": "a95c4835014d026afadb355d97a95980",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/64/8c1795dee5c328e85b8eec47459ace6c6b3afc": "a062775540eed7e810765a8d0e06a493",
".git/objects/65/3d0381ca0dc6494ad682e992a644b503124ca0": "fe264d5210a61db685c75b22e55f10af",
".git/objects/6a/64dc77c78e7a6808aa68180b4fdee52f0d5a35": "bdddeed19125153bac55a86253b70e18",
".git/objects/6b/ae4fd976e8f9c874341c58a741b8126d0a559d": "6d775d5d1f9fa0ef5bb04c6e26fe142e",
".git/objects/6c/380f467a1ca94b64d753c9fb660c969640e045": "2cebf43cc47176029fff47b5fd505e88",
".git/objects/6c/caf29c69734b086c53d2eeafd5edf7d71263c5": "220d896161a9d0fd7860c5f390db8e4f",
".git/objects/6e/457eb66ca33b9bea0149311b96767ec327ee3f": "edf556c8e5cedaced09347b6f4da5c9d",
".git/objects/6f/ea92908f8921cdb3675f178f206952088727f3": "8643b9daf482af1b184ce8851a6d1f87",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/3c54a55f5032083ac7f8c19827436466d20216": "036bab0fbafbb747a7241c1738db3655",
".git/objects/75/8ce7c0c828e868656b5e544a23977de600ca79": "71ae491036ffaf84a27886ea85e1f6e1",
".git/objects/76/1e574806d4a8a03915677110ac52f8e5efe28b": "7b932e8bfe11b9eac372209c6dd9591f",
".git/objects/78/7a8d02418613964d35c61d0e2fbd9adc35fc2f": "08a18bbcc7da074da6594e0caf1bca66",
".git/objects/78/b15393ef451afc2c11642a2855a8e2688fa1c9": "2d19ee06879035342a1feb717081b09a",
".git/objects/79/7f62075d63c82c2f7f568ae49104ce04dac5b8": "efc600fa88edcfd758facf0ee59aec28",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/33c508f45738eefc1dfcdfc677a3e7d87814f9": "6bd31d01c48344a893b7642e407819fb",
".git/objects/7c/cee046798b34d354cc8dd8fef4f398fa2fb4d7": "f44cd7b0fad2d01a5269b92f36c98b1a",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/ddfd16174448f099a8eb2dfe0384f9b74c35de": "4536e6419f01b49c91a086b2d44799b2",
".git/objects/81/e124d05973544a0c51c6a9656485aa4621a966": "ef447c8cab977006098ef27d683571dc",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/83/d32c417cb441ab65fda56e0c0d2b5a50e939fc": "5bbf2e94623854cd7b4834bfe15c866a",
".git/objects/85/6460de36fc63300c42bd6082a883baab30d63d": "5cc2ff9c06fd75b5a645f2578c832ac6",
".git/objects/86/bb971747f241c1ddcd4e1e99efb09988736db1": "173f1c85e49a6e92cf391fc25f68feba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/3cab6c140883f23138185fe182854e671bef66": "89f2705cf40df223c976b65d86ff5e2e",
".git/objects/95/dc458039ef9f6b6747d5ac57c6de9b5a48103b": "5d6efa57f11b4d732bd5abc9de2c71c6",
".git/objects/96/6a0538e65cd9b9652ed707e456ecdf8a3458e7": "8d67f714f07b505a5f958e3a2e96bc7e",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/99/9c4ea9ba0639f5713b4949268a35cbb9854524": "4a6869ae700ab4004db7d3fb1d45de7f",
".git/objects/9a/bcb601848d491511d1d7aa18bae0112e62fc92": "df1a624864f45e376ff4107e53e91d92",
".git/objects/9d/29905f44904fd4e2c395622a0069fa164cfd56": "e2c89e2d9b60ff75a4d2966d0c29d013",
".git/objects/a1/2da51f709f0d3225229f340547fa6eb81fbf9a": "a9470b547d9a4fa7f15379e46763a9c0",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/77c67f3016aacdc8450d2f115db5aa11be4b91": "762a1cba3fbf59f83e0f75fdd1b04018",
".git/objects/a2/bc34b008b8cd7335e6c4c9989a9b5bc5c0fb0b": "a542e9c9b0f1c0e266b490a02d9dcfb2",
".git/objects/a3/5a7164066b76c6cc25db23e89dbab4691d522e": "9a9ca2bcb62c57cf7ccd71fa8de41ed6",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/a9/0be3ac17c12bbe18837cd3b1b90109d6dc9b3f": "81df89909adb63b4fd712c0ff055602a",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b4/796e0acbc321a7e59a35551bb08981f9513c6e": "ea24d6c941818cb957525ab7a25a9be6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/d0ba502724a6abfcb0f364665ab917d38526c6": "b7a49fd743456f274eb8d47ce317eeb5",
".git/objects/ba/2c0494e81c7327ae3af6486089fee078e9d492": "568148cae2bf00a0f8229a7f1c87f555",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/c2/8a41cbafac18fc008d613e9195255f03d41432": "a8cd52b919d800b42ee069171677aa0c",
".git/objects/c4/d459daa3f36eeeb284d720ad6abf549ab4a227": "e6820fbbeec9bf1b1eee94e10ec9cc25",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/c180c7db31fffa81f485c9f89bab53c1b25a57": "af1202364d830e4e89ccbcc731ba5ac0",
".git/objects/d1/1cbf2ca4469f9f7e03b5a33266f044119a274d": "874355a8b3e6af374746ee529178ba51",
".git/objects/d2/6cfe22c6114e938f652ad5c9329fa1a5aeea9a": "efb3197d1b9b3614bb1f6aeaf19c39a2",
".git/objects/d2/c43db7d29e3b7935617f4ab92674df35569704": "7e9861278901865ddb09fa01c324610e",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/ca466e35e4754f2fee4d9dfc5b26c9e82b5725": "40be1636359a87f37789dd830976aed9",
".git/objects/d9/63b991166f74138df5755c8aa1b19888384378": "37657aa329579db59f327017399c5069",
".git/objects/db/22fbb91645600fde1305e3aa9a9714afb12fef": "7ffb0641e264115b7f410582b26a837d",
".git/objects/dd/3b65046e72f61c4f4231ce252b45cc1be386ac": "3c1ef0006318ce30cff26a702a9993ab",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/9f51384ddbc9b54639da91451f61ca4423b10d": "b47fc7cd6d2ee519779cd0870d1849dc",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/5f9c6a2b64bc95c29ac57656cbd102665687bc": "56d8cfef5268b1a56bf374b6d06d720b",
".git/objects/e3/71c19c706ccb26658bfc60b96e2adca13d032b": "678d15e94f8b108f6baa792bce848eec",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/9ab8c94874bf633cc92ea481319b5639738e50": "ffc99ff248ebe35aaff2f84b05fda3d0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/0160243275b549a97e5c155edcbaf19828b0a2": "d03fb05205ed1ca56cec42f9360c6f9a",
".git/objects/ed/1ea119124f26f288cb40bde29aef32ee2ee74a": "df13b9c56623327bd976e9a28033fcf2",
".git/objects/ed/572a8b5759b9dc405caaff018e479c797b3902": "8a89bc28e8851740ea469c8ea45bfdab",
".git/objects/ed/71b0afe5fec6fe5ea86d0d90d248b7a2e16568": "98765d057fb1cb74d63dcd10b17c7537",
".git/objects/ed/b540138501f7739b13315194fd00572711193d": "513da74de213a4c845fe010fda93c2d0",
".git/objects/ef/2b84af6275dd3944a2a43582ef628551fde6c1": "135eab3ba3af650e4750f36a66864b31",
".git/objects/ef/8322f695380535622566aee9f611d6df2a334a": "f25041f6ff6c934fa05fe75f585b67bf",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f0/ef0e022ca42d0d94d7ca8dd4ce66c2ba526a93": "179d62cf56faf774e291bc81afdee26b",
".git/objects/f2/71ce54c678658fe61d74c4dfd2d9779281041e": "cd13f39529401e772e0d87562f29862a",
".git/objects/f9/e305eb22e8d01b3c16869c6a2e2bbde8fda960": "8ba0089cd7482f43df2ef4b5b158797f",
".git/objects/fc/0f322e61617230621468a8090f25edb73110d5": "ecc6495fc2bada51dd28771bea5b58eb",
".git/objects/fd/e25991b8b104e26507b484cc4722ecebedc090": "f116f2d6d2b935e56c2eca628953fb09",
".git/ORIG_HEAD": "e76caaf1ee322a0a7aecafbec89d9efa",
".git/refs/heads/main": "4b048dfe1f7a188e8dcb42738a0e1d39",
".git/refs/heads/portfolio": "c5a3912f4db4971d7c607da1cb470eb5",
".git/refs/remotes/origin/firstApp": "41354eb90e9215a9476a5e37855b932a",
".git/refs/remotes/origin/main": "4b048dfe1f7a188e8dcb42738a0e1d39",
".git/refs/remotes/origin/portfolio": "e76caaf1ee322a0a7aecafbec89d9efa",
"assets/AssetManifest.bin": "3ebf2226fc045ea8e568101efe00f5cd",
"assets/AssetManifest.json": "5491c2e446d15e44547f7400c7ecef1f",
"assets/assets/icons/behance.svg": "1487dff57f5c15131037cb6965a4d0bf",
"assets/assets/icons/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/icons/check.svg": "bce7a581bb999caac446c9138a57a401",
"assets/assets/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/icons/download.svg": "8c24d4679cb0c5297277321bf7b65d28",
"assets/assets/icons/dribble.svg": "cf842513f50591eb280695ad14bfa409",
"assets/assets/icons/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/icons/github.svg": "49b7a0f6543674cc4743ec1a9f02e368",
"assets/assets/icons/hive.png": "f64c444a3a63a95425fe55f7299079ba",
"assets/assets/icons/js.png": "8b8c297ca47f7548f81c24f2b63513f3",
"assets/assets/icons/linkedin.svg": "2f5e837978e8a6bb595dfd11c8dbd42f",
"assets/assets/icons/mongodb.png": "e901847459cb0001a196e73a9cdb6abc",
"assets/assets/icons/nodejs.png": "d1c1e9007502042d1a6f0b57978ef1cd",
"assets/assets/icons/twitter.svg": "c09d9f98cb67b0dfc2aa4c63170f2632",
"assets/assets/images/amazon.png": "cfe07d767a245df3ed202a8e9624155b",
"assets/assets/images/facebook.png": "465faff2d70a72c2363cee2388910829",
"assets/assets/images/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/assets/images/news.png": "f40da8dbf6de5a930b151c35874af5a9",
"assets/assets/images/profile.png": "847cbf34c0a09692c4394064cb93fec2",
"assets/assets/images/quiz.png": "fdc9ecc4028178fa6d3975634c9db94d",
"assets/assets/images/restaurant.png": "b10eb926582cd55809722fc2d4577f56",
"assets/assets/images/service.png": "77d5825a51e82958f23cfd3cd176acfe",
"assets/assets/images/triange_icon.png": "086ab5ca50d3e558e3307ff009975083",
"assets/assets/images/whatsapp.png": "e6817a367a89f4df51006cdf05c04527",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "b1111ca5c7373b13a97f9fbe5931a63c",
"assets/NOTICES": "32069909cb407032f9204b11635d7bd6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "10d8d183c6385c432e5b96a7de048334",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firstApp/assets/AssetManifest.json": "9fc16a0728e57cbbef3ad1502d55558c",
"firstApp/assets/assets/carousel_images/image1.jpg": "017134094edb563fcff78761a8378e92",
"firstApp/assets/assets/carousel_images/image2.jpg": "13c48f586ac7d35b6890883d302e4945",
"firstApp/assets/assets/carousel_images/image3.jpg": "f7e1938085822f9481ea2c5ffd345f91",
"firstApp/assets/assets/carousel_images/image4.jpg": "bdb5116e7e55efae690e5fe82c80c356",
"firstApp/assets/assets/carousel_images/image5.jpg": "9ef70aa5c1d6932c4b0bbce24bd80ca0",
"firstApp/assets/assets/carousel_images/image6.jpg": "9f3ccdfbfac440e1b5dd396a73c43ef2",
"firstApp/assets/assets/home_logo.jpg": "eb5d4c8143280a9806f8a48b5c6b219c",
"firstApp/assets/assets/home_logo_1.jpg": "ed5f973f3f383a0fe7e2905e4bdc1ade",
"firstApp/assets/assets/images/photography.jpg": "0a7cc43900f2d9df497b1b4f3c16ad25",
"firstApp/assets/assets/images/romance.jpg": "14ce12cb5cc05b640c04f9cb0cdda10e",
"firstApp/assets/assets/images/sci-fi.jpg": "09010d770132135be16d09949335363d",
"firstApp/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"firstApp/assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"firstApp/assets/NOTICES": "61c28bfcbd2416adc8b12d39fb1653d3",
"firstApp/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"firstApp/assets/packages/wakelock_web/assets/no_sleep.js": "9c3aa3cd0b217305aa860decab3d9f42",
"firstApp/assets/shaders/ink_sparkle.frag": "643af2c031d77220c91c68a22c7aa72a",
"firstApp/canvaskit/canvaskit.js": "cf51f0145ed508c7203981a6297dfb6c",
"firstApp/canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"firstApp/canvaskit/profiling/canvaskit.js": "e069e181424052299c5bffb1b300bb13",
"firstApp/canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"firstApp/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firstApp/flutter.js": "db931120412af26cc1511fa058afaf0a",
"firstApp/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"firstApp/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"firstApp/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"firstApp/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"firstApp/index.html": "f7fc4a79f630d38378ed788309b9f4fd",
"/": "bf8b0bd5e2292aba8afe82c7098d63ac",
"firstApp/main.dart.js": "0f881237c30fa088f2370cc7271bde7a",
"firstApp/manifest.json": "aa404357cf940904c51e4e1b9fa74494",
"firstApp/version.json": "58bc3dd9c1244ff8c835dd1f94cd2627",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b61ef4cb1a2c520d0919daafbb01f85f",
"main.dart.js": "ec54b0bde6c69c1b6ae4c6f951dc2f91",
"manifest.json": "30a6ea85f38555c77870a57aeabe8211",
"portfolio/assets/AssetManifest.bin": "3ebf2226fc045ea8e568101efe00f5cd",
"portfolio/assets/AssetManifest.json": "5491c2e446d15e44547f7400c7ecef1f",
"portfolio/assets/assets/icons/behance.svg": "1487dff57f5c15131037cb6965a4d0bf",
"portfolio/assets/assets/icons/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"portfolio/assets/assets/icons/check.svg": "bce7a581bb999caac446c9138a57a401",
"portfolio/assets/assets/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"portfolio/assets/assets/icons/download.svg": "8c24d4679cb0c5297277321bf7b65d28",
"portfolio/assets/assets/icons/dribble.svg": "cf842513f50591eb280695ad14bfa409",
"portfolio/assets/assets/icons/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"portfolio/assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"portfolio/assets/assets/icons/github.svg": "49b7a0f6543674cc4743ec1a9f02e368",
"portfolio/assets/assets/icons/hive.png": "f64c444a3a63a95425fe55f7299079ba",
"portfolio/assets/assets/icons/js.png": "8b8c297ca47f7548f81c24f2b63513f3",
"portfolio/assets/assets/icons/linkedin.svg": "2f5e837978e8a6bb595dfd11c8dbd42f",
"portfolio/assets/assets/icons/mongodb.png": "e901847459cb0001a196e73a9cdb6abc",
"portfolio/assets/assets/icons/nodejs.png": "d1c1e9007502042d1a6f0b57978ef1cd",
"portfolio/assets/assets/icons/twitter.svg": "c09d9f98cb67b0dfc2aa4c63170f2632",
"portfolio/assets/assets/images/amazon.png": "cfe07d767a245df3ed202a8e9624155b",
"portfolio/assets/assets/images/facebook.png": "465faff2d70a72c2363cee2388910829",
"portfolio/assets/assets/images/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"portfolio/assets/assets/images/news.png": "f40da8dbf6de5a930b151c35874af5a9",
"portfolio/assets/assets/images/profile.png": "847cbf34c0a09692c4394064cb93fec2",
"portfolio/assets/assets/images/quiz.png": "fdc9ecc4028178fa6d3975634c9db94d",
"portfolio/assets/assets/images/restaurant.png": "b10eb926582cd55809722fc2d4577f56",
"portfolio/assets/assets/images/service.png": "77d5825a51e82958f23cfd3cd176acfe",
"portfolio/assets/assets/images/triange_icon.png": "086ab5ca50d3e558e3307ff009975083",
"portfolio/assets/assets/images/whatsapp.png": "e6817a367a89f4df51006cdf05c04527",
"portfolio/assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"portfolio/assets/fonts/MaterialIcons-Regular.otf": "b1111ca5c7373b13a97f9fbe5931a63c",
"portfolio/assets/NOTICES": "78bc1876fe11be155b752f75e998a8e6",
"portfolio/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "10d8d183c6385c432e5b96a7de048334",
"portfolio/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"portfolio/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"portfolio/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"portfolio/assets/shaders/ink_sparkle.frag": "9851c5ed1da0cd856f0a970c4ceae2ab",
"portfolio/canvaskit/canvaskit.js": "2530e95ad88e471d9aa975ddc1db129e",
"portfolio/canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"portfolio/canvaskit/chromium/canvaskit.js": "3de7f403fb78f28baf27270fe5047484",
"portfolio/canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"portfolio/canvaskit/skwasm.js": "34e34e7a2e189187d41369f3205ddb7c",
"portfolio/canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"portfolio/canvaskit/skwasm.worker.js": "b3863a3012fce5442e482648e7f6e763",
"portfolio/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"portfolio/flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"portfolio/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"portfolio/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"portfolio/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"portfolio/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"portfolio/index.html": "bf8b0bd5e2292aba8afe82c7098d63ac",
"portfolio/main.dart.js": "f09db3e2ab95cb4565190491635b63c2",
"portfolio/manifest.json": "30a6ea85f38555c77870a57aeabe8211",
"portfolio/version.json": "c420e205d8eac4ccea99913b4a50bfa7",
"version.json": "c420e205d8eac4ccea99913b4a50bfa7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
