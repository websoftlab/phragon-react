import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandComedyCentralIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandComedyCentralIcon = React.forwardRef<SVGSVGElement, TablerBrandComedyCentralIconProps>(
	function TablerBrandComedyCentralIcon(props, ref) {
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
				<path d="M5.343 17.657a8 8 0 1 0 0 -11.314" />
				<path d="M13.828 9.172a4 4 0 1 0 0 5.656" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandComedyCentralIcon.displayName = "TablerBrandComedyCentralIcon";
}
