import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeltaIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeltaIcon = React.forwardRef<SVGSVGElement, TablerDeltaIconProps>(function TablerDeltaIcon(
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
			<path d="M4 20h16l-8 -16z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDeltaIcon.displayName = "TablerDeltaIcon";
}
