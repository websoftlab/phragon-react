import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandZapierIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandZapierIcon = React.forwardRef<SVGSVGElement, TablerBrandZapierIconProps>(
	function TablerBrandZapierIcon(props, ref) {
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
				<path d="M3 12h6" />
				<path d="M21 12h-6" />
				<path d="M12 3v6" />
				<path d="M12 15v6" />
				<path d="M5.636 5.636l4.243 4.243" />
				<path d="M18.364 18.364l-4.243 -4.243" />
				<path d="M18.364 5.636l-4.243 4.243" />
				<path d="M9.879 14.121l-4.243 4.243" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandZapierIcon.displayName = "TablerBrandZapierIcon";
}
