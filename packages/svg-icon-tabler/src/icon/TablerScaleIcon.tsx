import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerScaleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerScaleIcon = React.forwardRef<SVGSVGElement, TablerScaleIconProps>(function TablerScaleIcon(
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
			<path d="M7 20l10 0" />
			<path d="M6 6l6 -1l6 1" />
			<path d="M12 3l0 17" />
			<path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
			<path d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerScaleIcon.displayName = "TablerScaleIcon";
}
