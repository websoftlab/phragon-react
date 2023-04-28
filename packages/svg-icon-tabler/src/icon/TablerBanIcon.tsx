import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBanIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBanIcon = React.forwardRef<SVGSVGElement, TablerBanIconProps>(function TablerBanIcon(props, ref) {
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
			<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
			<path d="M5.7 5.7l12.6 12.6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBanIcon.displayName = "TablerBanIcon";
}
