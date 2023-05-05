import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRegexIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRegexIcon = React.forwardRef<SVGSVGElement, TablerRegexIconProps>(function TablerRegexIcon(
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
			<path d="M17 3v10" />
			<path d="m12.67 5.5 8.66 5" />
			<path d="m12.67 10.5 8.66-5" />
			<path d="M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRegexIcon.displayName = "TablerRegexIcon";
}
