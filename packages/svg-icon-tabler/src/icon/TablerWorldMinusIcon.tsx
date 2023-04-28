import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWorldMinusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWorldMinusIcon = React.forwardRef<SVGSVGElement, TablerWorldMinusIconProps>(
	function TablerWorldMinusIcon(props, ref) {
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
				<path d="M20.483 15.006a9 9 0 1 0 -7.958 5.978" />
				<path d="M3.6 9h16.8" />
				<path d="M3.6 15h16.8" />
				<path d="M11.5 3a17 17 0 0 0 0 18" />
				<path d="M12.5 3a16.94 16.94 0 0 1 2.307 12" />
				<path d="M16 19h6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerWorldMinusIcon.displayName = "TablerWorldMinusIcon";
}
