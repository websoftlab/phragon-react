import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandWeiboIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandWeiboIcon = React.forwardRef<SVGSVGElement, TablerBrandWeiboIconProps>(
	function TablerBrandWeiboIcon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				fill="none"
			>
				<path d="M19 14.127c0 3.073 -3.502 5.873 -8 5.873c-4.126 0 -8 -2.224 -8 -5.565c0 -1.78 .984 -3.737 2.7 -5.567c2.362 -2.51 5.193 -3.687 6.551 -2.238c.415 .44 .752 1.39 .749 2.062c2 -1.615 4.308 .387 3.5 2.693c1.26 .557 2.5 .538 2.5 2.742z" />
				<path d="M15 4h1a5 5 0 0 1 5 5v1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandWeiboIcon.displayName = "TablerBrandWeiboIcon";
}
