import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWebhookIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWebhookIcon = React.forwardRef<SVGSVGElement, TablerWebhookIconProps>(function TablerWebhookIcon(
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
			<path d="M4.876 13.61a4 4 0 1 0 6.124 3.39h6" />
			<path d="M15.066 20.502a4 4 0 1 0 1.934 -7.502c-.706 0 -1.424 .179 -2 .5l-3 -5.5" />
			<path d="M16 8a4 4 0 1 0 -8 0c0 1.506 .77 2.818 2 3.5l-3 5.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWebhookIcon.displayName = "TablerWebhookIcon";
}
