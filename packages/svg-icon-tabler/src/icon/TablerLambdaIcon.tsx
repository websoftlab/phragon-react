import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLambdaIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLambdaIcon = React.forwardRef<SVGSVGElement, TablerLambdaIconProps>(function TablerLambdaIcon(
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
			<path d="M6 20l6.5 -9" />
			<path d="M19 20c-6 0 -6 -16 -12 -16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLambdaIcon.displayName = "TablerLambdaIcon";
}
