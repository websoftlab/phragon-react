import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandGoogleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandGoogleIcon = React.forwardRef<SVGSVGElement, TablerBrandGoogleIconProps>(
	function TablerBrandGoogleIcon(props, ref) {
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
				<path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandGoogleIcon.displayName = "TablerBrandGoogleIcon";
}
