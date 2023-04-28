import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandSuperhumanIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandSuperhumanIcon = React.forwardRef<SVGSVGElement, TablerBrandSuperhumanIconProps>(
	function TablerBrandSuperhumanIcon(props, ref) {
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
				<path d="M16 12l4 3l-8 7l-8 -7l4 -3" />
				<path d="M12 3l-8 6l8 6l8 -6z" />
				<path d="M12 15h8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandSuperhumanIcon.displayName = "TablerBrandSuperhumanIcon";
}
