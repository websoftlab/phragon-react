import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCoinYenIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCoinYenIcon = React.forwardRef<SVGSVGElement, TablerCoinYenIconProps>(function TablerCoinYenIcon(
	props,
	ref
) {
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
			<path d="M9 12h6" />
			<path d="M9 15h6" />
			<path d="M9 8l3 4.5" />
			<path d="M15 8l-3 4.5v4.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCoinYenIcon.displayName = "TablerCoinYenIcon";
}
