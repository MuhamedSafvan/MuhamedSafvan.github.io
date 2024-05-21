import 'package:flutter/material.dart';
import 'package:my_portfolio/view/intro/components/social_icon.dart';
import 'package:url_launcher/url_launcher.dart';

class SocialMediaIconColumn extends StatelessWidget {
  const SocialMediaIconColumn({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SocialMediaIcon(icon: 'assets/icons/linkedin.svg',onTap: ()=>launchUrl(Uri.parse('https://www.linkedin.com/in/safvannp/'))),
        SocialMediaIcon(icon: 'assets/icons/github.svg',onTap: () => launchUrl(Uri.parse('https://github.com/MuhamedSafvan')),),
        // const SocialMediaIcon(icon: 'assets/icons/dribble.svg',),
        // const SocialMediaIcon(icon: 'assets/icons/twitter.svg'),
        // const SocialMediaIcon(icon: 'assets/icons/linkedin.svg'),
      ],
    );
  }
}
