"use strict";

var helpers = require("../../helpers/helpers");

exports["Europe/Vilnius"] = {
	"1916" : helpers.makeTestYear("Europe/Vilnius", [
		["1916-12-31T22:35:59+00:00", "23:59:59", "WMT", -84],
		["1916-12-31T22:36:00+00:00", "00:11:36", "KMT", -5736 / 60]
	]),

	"1919" : helpers.makeTestYear("Europe/Vilnius", [
		["1919-10-09T22:24:23+00:00", "23:59:59", "KMT", -5736 / 60],
		["1919-10-09T22:24:24+00:00", "23:24:24", "CET", -60]
	]),

	"1920" : helpers.makeTestYear("Europe/Vilnius", [
		["1920-07-11T22:59:59+00:00", "23:59:59", "CET", -60],
		["1920-07-11T23:00:00+00:00", "01:00:00", "EET", -120],
		["1920-10-08T21:59:59+00:00", "23:59:59", "EET", -120],
		["1920-10-08T22:00:00+00:00", "23:00:00", "CET", -60]
	]),

	"1940" : helpers.makeTestYear("Europe/Vilnius", [
		["1940-08-02T22:59:59+00:00", "23:59:59", "CET", -60],
		["1940-08-02T23:00:00+00:00", "02:00:00", "MSK", -180]
	]),

	"1941" : helpers.makeTestYear("Europe/Vilnius", [
		["1941-06-23T20:59:59+00:00", "23:59:59", "MSK", -180],
		["1941-06-23T21:00:00+00:00", "23:00:00", "CEST", -120]
	]),

	"1942" : helpers.makeTestYear("Europe/Vilnius", [
		["1942-11-02T00:59:59+00:00", "02:59:59", "CEST", -120],
		["1942-11-02T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"1943" : helpers.makeTestYear("Europe/Vilnius", [
		["1943-03-29T00:59:59+00:00", "01:59:59", "CET", -60],
		["1943-03-29T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1943-10-04T00:59:59+00:00", "02:59:59", "CEST", -120],
		["1943-10-04T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"1944" : helpers.makeTestYear("Europe/Vilnius", [
		["1944-04-03T00:59:59+00:00", "01:59:59", "CET", -60],
		["1944-04-03T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1944-07-31T21:59:59+00:00", "23:59:59", "CEST", -120],
		["1944-07-31T22:00:00+00:00", "01:00:00", "MSK", -180]
	]),

	"1981" : helpers.makeTestYear("Europe/Vilnius", [
		["1981-03-31T20:59:59+00:00", "23:59:59", "MSK", -180],
		["1981-03-31T21:00:00+00:00", "01:00:00", "MSD", -240],
		["1981-09-30T19:59:59+00:00", "23:59:59", "MSD", -240],
		["1981-09-30T20:00:00+00:00", "23:00:00", "MSK", -180]
	]),

	"1982" : helpers.makeTestYear("Europe/Vilnius", [
		["1982-03-31T20:59:59+00:00", "23:59:59", "MSK", -180],
		["1982-03-31T21:00:00+00:00", "01:00:00", "MSD", -240],
		["1982-09-30T19:59:59+00:00", "23:59:59", "MSD", -240],
		["1982-09-30T20:00:00+00:00", "23:00:00", "MSK", -180]
	]),

	"1983" : helpers.makeTestYear("Europe/Vilnius", [
		["1983-03-31T20:59:59+00:00", "23:59:59", "MSK", -180],
		["1983-03-31T21:00:00+00:00", "01:00:00", "MSD", -240],
		["1983-09-30T19:59:59+00:00", "23:59:59", "MSD", -240],
		["1983-09-30T20:00:00+00:00", "23:00:00", "MSK", -180]
	]),

	"1984" : helpers.makeTestYear("Europe/Vilnius", [
		["1984-03-31T20:59:59+00:00", "23:59:59", "MSK", -180],
		["1984-03-31T21:00:00+00:00", "01:00:00", "MSD", -240],
		["1984-09-29T22:59:59+00:00", "02:59:59", "MSD", -240],
		["1984-09-29T23:00:00+00:00", "02:00:00", "MSK", -180]
	]),

	"1985" : helpers.makeTestYear("Europe/Vilnius", [
		["1985-03-30T22:59:59+00:00", "01:59:59", "MSK", -180],
		["1985-03-30T23:00:00+00:00", "03:00:00", "MSD", -240],
		["1985-09-28T22:59:59+00:00", "02:59:59", "MSD", -240],
		["1985-09-28T23:00:00+00:00", "02:00:00", "MSK", -180]
	]),

	"1986" : helpers.makeTestYear("Europe/Vilnius", [
		["1986-03-29T22:59:59+00:00", "01:59:59", "MSK", -180],
		["1986-03-29T23:00:00+00:00", "03:00:00", "MSD", -240],
		["1986-09-27T22:59:59+00:00", "02:59:59", "MSD", -240],
		["1986-09-27T23:00:00+00:00", "02:00:00", "MSK", -180]
	]),

	"1987" : helpers.makeTestYear("Europe/Vilnius", [
		["1987-03-28T22:59:59+00:00", "01:59:59", "MSK", -180],
		["1987-03-28T23:00:00+00:00", "03:00:00", "MSD", -240],
		["1987-09-26T22:59:59+00:00", "02:59:59", "MSD", -240],
		["1987-09-26T23:00:00+00:00", "02:00:00", "MSK", -180]
	]),

	"1988" : helpers.makeTestYear("Europe/Vilnius", [
		["1988-03-26T22:59:59+00:00", "01:59:59", "MSK", -180],
		["1988-03-26T23:00:00+00:00", "03:00:00", "MSD", -240],
		["1988-09-24T22:59:59+00:00", "02:59:59", "MSD", -240],
		["1988-09-24T23:00:00+00:00", "02:00:00", "MSK", -180]
	]),

	"1989" : helpers.makeTestYear("Europe/Vilnius", [
		["1989-03-25T22:59:59+00:00", "01:59:59", "MSK", -180],
		["1989-03-25T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1989-09-23T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1989-09-24T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1990" : helpers.makeTestYear("Europe/Vilnius", [
		["1990-03-24T23:59:59+00:00", "01:59:59", "EET", -120],
		["1990-03-25T00:00:00+00:00", "03:00:00", "EEST", -180],
		["1990-09-29T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1990-09-30T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1991" : helpers.makeTestYear("Europe/Vilnius", [
		["1991-03-30T23:59:59+00:00", "01:59:59", "EET", -120],
		["1991-03-31T00:00:00+00:00", "03:00:00", "EEST", -180],
		["1991-09-28T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1991-09-29T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1992" : helpers.makeTestYear("Europe/Vilnius", [
		["1992-03-28T23:59:59+00:00", "01:59:59", "EET", -120],
		["1992-03-29T00:00:00+00:00", "03:00:00", "EEST", -180],
		["1992-09-26T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1992-09-27T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1993" : helpers.makeTestYear("Europe/Vilnius", [
		["1993-03-27T23:59:59+00:00", "01:59:59", "EET", -120],
		["1993-03-28T00:00:00+00:00", "03:00:00", "EEST", -180],
		["1993-09-25T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1993-09-26T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1994" : helpers.makeTestYear("Europe/Vilnius", [
		["1994-03-26T23:59:59+00:00", "01:59:59", "EET", -120],
		["1994-03-27T00:00:00+00:00", "03:00:00", "EEST", -180],
		["1994-09-24T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1994-09-25T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1995" : helpers.makeTestYear("Europe/Vilnius", [
		["1995-03-25T23:59:59+00:00", "01:59:59", "EET", -120],
		["1995-03-26T00:00:00+00:00", "03:00:00", "EEST", -180],
		["1995-09-23T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1995-09-24T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1996" : helpers.makeTestYear("Europe/Vilnius", [
		["1996-03-30T23:59:59+00:00", "01:59:59", "EET", -120],
		["1996-03-31T00:00:00+00:00", "03:00:00", "EEST", -180],
		["1996-10-26T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1996-10-27T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1997" : helpers.makeTestYear("Europe/Vilnius", [
		["1997-03-29T23:59:59+00:00", "01:59:59", "EET", -120],
		["1997-03-30T00:00:00+00:00", "03:00:00", "EEST", -180],
		["1997-10-25T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1997-10-26T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1998" : helpers.makeTestYear("Europe/Vilnius", [
		["1998-03-29T00:59:59+00:00", "02:59:59", "EET", -120],
		["1998-03-29T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1998-10-25T00:59:59+00:00", "02:59:59", "CEST", -120],
		["1998-10-25T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"1999" : helpers.makeTestYear("Europe/Vilnius", [
		["1999-03-28T00:59:59+00:00", "01:59:59", "CET", -60],
		["1999-03-28T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1999-10-31T00:59:59+00:00", "02:59:59", "CEST", -120],
		["1999-10-31T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2003" : helpers.makeTestYear("Europe/Vilnius", [
		["2003-03-30T00:59:59+00:00", "02:59:59", "EET", -120],
		["2003-03-30T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2003-10-26T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2003-10-26T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2004" : helpers.makeTestYear("Europe/Vilnius", [
		["2004-03-28T00:59:59+00:00", "02:59:59", "EET", -120],
		["2004-03-28T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2004-10-31T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2004-10-31T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2005" : helpers.makeTestYear("Europe/Vilnius", [
		["2005-03-27T00:59:59+00:00", "02:59:59", "EET", -120],
		["2005-03-27T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2005-10-30T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2005-10-30T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2006" : helpers.makeTestYear("Europe/Vilnius", [
		["2006-03-26T00:59:59+00:00", "02:59:59", "EET", -120],
		["2006-03-26T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2006-10-29T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2006-10-29T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2007" : helpers.makeTestYear("Europe/Vilnius", [
		["2007-03-25T00:59:59+00:00", "02:59:59", "EET", -120],
		["2007-03-25T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2007-10-28T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2007-10-28T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2008" : helpers.makeTestYear("Europe/Vilnius", [
		["2008-03-30T00:59:59+00:00", "02:59:59", "EET", -120],
		["2008-03-30T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2008-10-26T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2008-10-26T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2009" : helpers.makeTestYear("Europe/Vilnius", [
		["2009-03-29T00:59:59+00:00", "02:59:59", "EET", -120],
		["2009-03-29T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2009-10-25T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2009-10-25T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2010" : helpers.makeTestYear("Europe/Vilnius", [
		["2010-03-28T00:59:59+00:00", "02:59:59", "EET", -120],
		["2010-03-28T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2010-10-31T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2010-10-31T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2011" : helpers.makeTestYear("Europe/Vilnius", [
		["2011-03-27T00:59:59+00:00", "02:59:59", "EET", -120],
		["2011-03-27T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2011-10-30T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2011-10-30T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2012" : helpers.makeTestYear("Europe/Vilnius", [
		["2012-03-25T00:59:59+00:00", "02:59:59", "EET", -120],
		["2012-03-25T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2012-10-28T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2012-10-28T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2013" : helpers.makeTestYear("Europe/Vilnius", [
		["2013-03-31T00:59:59+00:00", "02:59:59", "EET", -120],
		["2013-03-31T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2013-10-27T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2013-10-27T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2014" : helpers.makeTestYear("Europe/Vilnius", [
		["2014-03-30T00:59:59+00:00", "02:59:59", "EET", -120],
		["2014-03-30T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2014-10-26T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2014-10-26T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2015" : helpers.makeTestYear("Europe/Vilnius", [
		["2015-03-29T00:59:59+00:00", "02:59:59", "EET", -120],
		["2015-03-29T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2015-10-25T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2015-10-25T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2016" : helpers.makeTestYear("Europe/Vilnius", [
		["2016-03-27T00:59:59+00:00", "02:59:59", "EET", -120],
		["2016-03-27T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2016-10-30T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2016-10-30T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2017" : helpers.makeTestYear("Europe/Vilnius", [
		["2017-03-26T00:59:59+00:00", "02:59:59", "EET", -120],
		["2017-03-26T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2017-10-29T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2017-10-29T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2018" : helpers.makeTestYear("Europe/Vilnius", [
		["2018-03-25T00:59:59+00:00", "02:59:59", "EET", -120],
		["2018-03-25T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2018-10-28T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2018-10-28T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2019" : helpers.makeTestYear("Europe/Vilnius", [
		["2019-03-31T00:59:59+00:00", "02:59:59", "EET", -120],
		["2019-03-31T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2019-10-27T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2019-10-27T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2020" : helpers.makeTestYear("Europe/Vilnius", [
		["2020-03-29T00:59:59+00:00", "02:59:59", "EET", -120],
		["2020-03-29T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2020-10-25T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2020-10-25T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2021" : helpers.makeTestYear("Europe/Vilnius", [
		["2021-03-28T00:59:59+00:00", "02:59:59", "EET", -120],
		["2021-03-28T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2021-10-31T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2021-10-31T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2022" : helpers.makeTestYear("Europe/Vilnius", [
		["2022-03-27T00:59:59+00:00", "02:59:59", "EET", -120],
		["2022-03-27T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2022-10-30T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2022-10-30T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2023" : helpers.makeTestYear("Europe/Vilnius", [
		["2023-03-26T00:59:59+00:00", "02:59:59", "EET", -120],
		["2023-03-26T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2023-10-29T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2023-10-29T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2024" : helpers.makeTestYear("Europe/Vilnius", [
		["2024-03-31T00:59:59+00:00", "02:59:59", "EET", -120],
		["2024-03-31T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2024-10-27T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2024-10-27T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2025" : helpers.makeTestYear("Europe/Vilnius", [
		["2025-03-30T00:59:59+00:00", "02:59:59", "EET", -120],
		["2025-03-30T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2025-10-26T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2025-10-26T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2026" : helpers.makeTestYear("Europe/Vilnius", [
		["2026-03-29T00:59:59+00:00", "02:59:59", "EET", -120],
		["2026-03-29T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2026-10-25T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2026-10-25T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2027" : helpers.makeTestYear("Europe/Vilnius", [
		["2027-03-28T00:59:59+00:00", "02:59:59", "EET", -120],
		["2027-03-28T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2027-10-31T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2027-10-31T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2028" : helpers.makeTestYear("Europe/Vilnius", [
		["2028-03-26T00:59:59+00:00", "02:59:59", "EET", -120],
		["2028-03-26T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2028-10-29T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2028-10-29T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2029" : helpers.makeTestYear("Europe/Vilnius", [
		["2029-03-25T00:59:59+00:00", "02:59:59", "EET", -120],
		["2029-03-25T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2029-10-28T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2029-10-28T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2030" : helpers.makeTestYear("Europe/Vilnius", [
		["2030-03-31T00:59:59+00:00", "02:59:59", "EET", -120],
		["2030-03-31T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2030-10-27T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2030-10-27T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2031" : helpers.makeTestYear("Europe/Vilnius", [
		["2031-03-30T00:59:59+00:00", "02:59:59", "EET", -120],
		["2031-03-30T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2031-10-26T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2031-10-26T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2032" : helpers.makeTestYear("Europe/Vilnius", [
		["2032-03-28T00:59:59+00:00", "02:59:59", "EET", -120],
		["2032-03-28T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2032-10-31T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2032-10-31T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2033" : helpers.makeTestYear("Europe/Vilnius", [
		["2033-03-27T00:59:59+00:00", "02:59:59", "EET", -120],
		["2033-03-27T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2033-10-30T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2033-10-30T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2034" : helpers.makeTestYear("Europe/Vilnius", [
		["2034-03-26T00:59:59+00:00", "02:59:59", "EET", -120],
		["2034-03-26T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2034-10-29T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2034-10-29T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2035" : helpers.makeTestYear("Europe/Vilnius", [
		["2035-03-25T00:59:59+00:00", "02:59:59", "EET", -120],
		["2035-03-25T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2035-10-28T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2035-10-28T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2036" : helpers.makeTestYear("Europe/Vilnius", [
		["2036-03-30T00:59:59+00:00", "02:59:59", "EET", -120],
		["2036-03-30T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2036-10-26T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2036-10-26T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2037" : helpers.makeTestYear("Europe/Vilnius", [
		["2037-03-29T00:59:59+00:00", "02:59:59", "EET", -120],
		["2037-03-29T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2037-10-25T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2037-10-25T01:00:00+00:00", "03:00:00", "EET", -120]
	])
};