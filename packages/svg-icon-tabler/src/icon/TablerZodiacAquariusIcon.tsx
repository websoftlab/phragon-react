import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerZodiacAquariusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerZodiacAquariusIcon = React.forwardRef<SVGSVGElement, TablerZodiacAquariusIconProps>(
	function TablerZodiacAquariusIcon(props, ref) {
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
				<path d="M3 10l3 -3l3 3l3 -3l3 3l3 -3l3 3" />
				<path d="M3 17l3 -3l3 3l3 -3l3 3l3 -3l3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerZodiacAquariusIcon.displayName = "TablerZodiacAquariusIcon";
}
