import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandNationalGeographicIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandNationalGeographicIcon = React.forwardRef<
	SVGSVGElement,
	TablerBrandNationalGeographicIconProps
>(function TablerBrandNationalGeographicIcon(props, ref) {
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
			<path d="M7 3h10v18h-10z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBrandNationalGeographicIcon.displayName = "TablerBrandNationalGeographicIcon";
}
