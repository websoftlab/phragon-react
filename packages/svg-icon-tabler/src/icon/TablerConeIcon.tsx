import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerConeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerConeIcon = React.forwardRef<SVGSVGElement, TablerConeIconProps>(function TablerConeIcon(props, ref) {
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
			<path d="M12 14c3.866 0 7 1.343 7 3s-3.134 3 -7 3s-7 -1.343 -7 -3s3.134 -3 7 -3z" />
			<path d="M19 17v-.5l-7 -12.5l-7 12.5v.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerConeIcon.displayName = "TablerConeIcon";
}
