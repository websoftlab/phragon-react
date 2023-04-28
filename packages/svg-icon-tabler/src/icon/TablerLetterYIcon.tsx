import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLetterYIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLetterYIcon = React.forwardRef<SVGSVGElement, TablerLetterYIconProps>(function TablerLetterYIcon(
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
			<path d="M7 4l5 9l5 -9" />
			<path d="M12 13l0 7" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLetterYIcon.displayName = "TablerLetterYIcon";
}
