import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerProgressHelpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerProgressHelpIcon = React.forwardRef<SVGSVGElement, TablerProgressHelpIconProps>(
	function TablerProgressHelpIcon(props, ref) {
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
				<path d="M12 16v.01" />
				<path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
				<path d="M10 20.777a8.942 8.942 0 0 1 -2.48 -.969" />
				<path d="M14 3.223a9.003 9.003 0 0 1 0 17.554" />
				<path d="M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592" />
				<path d="M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305" />
				<path d="M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerProgressHelpIcon.displayName = "TablerProgressHelpIcon";
}
