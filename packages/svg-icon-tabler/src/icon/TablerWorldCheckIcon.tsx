import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWorldCheckIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWorldCheckIcon = React.forwardRef<SVGSVGElement, TablerWorldCheckIconProps>(
	function TablerWorldCheckIcon(props, ref) {
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
				<path d="M20.946 12.99a9 9 0 1 0 -9.46 7.995" />
				<path d="M3.6 9h16.8" />
				<path d="M3.6 15h13.9" />
				<path d="M11.5 3a17 17 0 0 0 0 18" />
				<path d="M12.5 3a16.997 16.997 0 0 1 2.311 12.001" />
				<path d="M15 19l2 2l4 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerWorldCheckIcon.displayName = "TablerWorldCheckIcon";
}
