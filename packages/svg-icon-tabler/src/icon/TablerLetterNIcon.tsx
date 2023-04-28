import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLetterNIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLetterNIcon = React.forwardRef<SVGSVGElement, TablerLetterNIconProps>(function TablerLetterNIcon(
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
			<path d="M7 20v-16l10 16v-16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLetterNIcon.displayName = "TablerLetterNIcon";
}
