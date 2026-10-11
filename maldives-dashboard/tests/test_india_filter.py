import os
import sys
import unittest

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
from app.classify import is_excluded  # noqa: E402


class TestIndiaFilter(unittest.TestCase):
    def test_stories_naming_india_or_its_deployments_are_dropped(self):
        for text in ["Indian forces leave Maldives", "New Delhi reacts to the Malé deal", "Lakshadweep patrol", "Hanimaadhoo airport upgrade",
                     "Indian Coast Guard aircraft delivered", "Greater Male Connectivity bridge opens"]:
            self.assertTrue(is_excluded(text), text)

    def test_sea_names_and_other_stories_stay(self):
        for text in ["Maldives Indian Ocean shipping", "Malé port expansion", "Velana airport expansion", "Chinese research vessel docks at Malé"]:
            self.assertFalse(is_excluded(text), text)


if __name__ == "__main__":
    unittest.main()
