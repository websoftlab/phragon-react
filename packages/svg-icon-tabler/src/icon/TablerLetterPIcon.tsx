import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLetterPIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLetterPIcon = React.forwardRef<SVGSVGElement, TablerLetterPIconProps>(function TablerLetterPIcon(
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
			<path d="M7 20v-16h5.5a4 4 0 0 1 0 9h-5.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLetterPIcon.displayName = "TablerLetterPIcon";
}
