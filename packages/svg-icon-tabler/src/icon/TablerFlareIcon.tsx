import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFlareIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFlareIcon = React.forwardRef<SVGSVGElement, TablerFlareIconProps>(function TablerFlareIcon(
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
			<path d="M12 3l3 6l6 3l-6 3l-3 6l-3 -6l-6 -3l6 -3z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFlareIcon.displayName = "TablerFlareIcon";
}
