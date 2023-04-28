import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandCodepenIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandCodepenIcon = React.forwardRef<SVGSVGElement, TablerBrandCodepenIconProps>(
	function TablerBrandCodepenIcon(props, ref) {
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
				<path d="M3 15l9 6l9 -6l-9 -6l-9 6" />
				<path d="M3 9l9 6l9 -6l-9 -6l-9 6" />
				<path d="M3 9l0 6" />
				<path d="M21 9l0 6" />
				<path d="M12 3l0 6" />
				<path d="M12 15l0 6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandCodepenIcon.displayName = "TablerBrandCodepenIcon";
}
