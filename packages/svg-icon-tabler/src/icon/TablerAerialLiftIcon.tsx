import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAerialLiftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAerialLiftIcon = React.forwardRef<SVGSVGElement, TablerAerialLiftIconProps>(
	function TablerAerialLiftIcon(props, ref) {
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
				<path d="M4 5l16 -2m-8 1v10m-5.106 -6h10.306c2.45 3 2.45 9 -.2 12h-10.106c-2.544 -3 -2.544 -9 0 -12zm-1.894 6h14" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAerialLiftIcon.displayName = "TablerAerialLiftIcon";
}
