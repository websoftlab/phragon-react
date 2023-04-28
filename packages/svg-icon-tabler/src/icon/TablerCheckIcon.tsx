import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCheckIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCheckIcon = React.forwardRef<SVGSVGElement, TablerCheckIconProps>(function TablerCheckIcon(
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
			<path d="M5 12l5 5l10 -10" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCheckIcon.displayName = "TablerCheckIcon";
}
