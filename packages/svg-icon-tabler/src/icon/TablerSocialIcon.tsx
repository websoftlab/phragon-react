import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSocialIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSocialIcon = React.forwardRef<SVGSVGElement, TablerSocialIconProps>(function TablerSocialIcon(
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
			<path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M12 14m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M12 7l0 4" />
			<path d="M6.7 17.8l2.8 -2" />
			<path d="M17.3 17.8l-2.8 -2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSocialIcon.displayName = "TablerSocialIcon";
}
